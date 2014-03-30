var SyntaxHiliter = (function() {
  var syntaxes = {};
  var wrapperTagName = 'code';

  var regExpLib = {
    string: {
      'doubleQuote': /".*?"/gm,
      'singleQuote': /'.*?'/gm
    },
    singleLine: {
      'doubleDash': /--.*?$/gm,
      'doubleSlash': /\/\/.*?$/gm,
      'hash': /#.*?$/gm,
      'semicolon': /;.*?$/gm,
      'singleQuote': /'.*?$/gm
    },
    multiLine: {
      'braceDash': /{-[\s\S]*?-}/gm,
      'doubleQuote': /"[\s\S]*?"/gm,
      'equalBegin': /=begin[\s\S]*?=end/gm,
      'exclamationDash': /&lt;!--[\s\S]*?--&gt;/gm,
      'parenthesisStar': /\(\*[\s\S]*?\*\)/gm,
      'slashStar': /\/\*[\s\S]*?\*\//gm,
      'singleQuote': /'[\s\S]*?'/gm,
      'tripleDoubleQuote': /"""[\s\S]*?"""/gm,
      'tripleSingleQuote': /'''[\s\S]*?'''/gm
    }
  };

  
  function strip(s) {
    return s.replace(/^\s*|\s*$/g, "");
  }
  
  function format(s, args) {
    return s.replace(/{([0-9]+)}/g, function() {
      return args[parseInt(arguments[1])];
    });
  }

  function regExpFormat(s, args) {
    return s.replace(/\$([0-9]+)/g, function() {
      return args[parseInt(arguments[1])];
    });
  }

  function reQuote(s) {
    return s.replace(/[\[\]\*\+\.\\\^\$\?\(\)\|\&]/gm, '\\$&');
  }

  function hasClass(elem, className) {
    var cs = elem.className.split(' ');
    for (var i = 0, len = cs.length; i < len; i++) {
      if (cs[i] === className) return true;
    }
    return false;
  }

  function getKeys(obj) {
    var keys = [];
    for (var k in obj) {
      keys.push(k);
    }
    return keys;
  }

  function getCodeLang(elem, opt_languages) {
    var langs = opt_languages || getKeys(syntaxes);

    if (elem.getAttribute('data-code-language'))
      return elem.getAttribute('data-code-language');

    for (var i = 0, len = langs.length; i < len; i++) {
      if (hasClass(elem, langs[i])) return langs[i];
    }

    return undefined;
  }
  
  function getText(elem) {
    var innerElem = elem.getElementsByTagName("code")[0];
    if (innerElem) {
      return innerElem.innerHTML;
    } else {
      return elem.innerHTML;
    }
  }


  function getSyntax(lang) {
    return syntaxes[lang];
  }


  function addTags(str, repList) {
    var newStr = '';
    var lastIndex = 0;
    var r;

    for (var i = 0, len = repList.length; i < len; i++) {
      r = repList[i];
      newStr += str.substring(lastIndex, r.index);
      newStr += r.newString;
      lastIndex = r.index + r.length;
    }
    newStr += str.substring(lastIndex);

    return newStr;
  }


  function splitLangs(langs) {
    var result = {};
    for (var k in langs) {
      k.split(",").forEach(function(lang) {
        result[strip(lang)] = langs[k];
      });
    }
    return result;
  }


  function lazyAll(ls) {
    var loading = {};
    var langs = splitLangs(ls);
    var elems = [].slice.call(document.getElementsByTagName("pre"));
    elems.forEach(function(elem) {
      var lang = getCodeLang(elem, getKeys(langs));
      var url = langs[lang];
      if (!lang || !url) return;
      var s = getText(elem);
      var loadingScript;

      if (syntaxes[lang]) {
        elem.innerHTML = addTags(s, syntaxes[lang].build(s));
      } else if (url in loading) {
        loading[url].addEventListener("load", function() {
          elem.innerHTML = addTags(s, syntaxes[lang].build(s));
        });
      } else {
        loadingScript = document.createElement("script");
        loadingScript.addEventListener("load", function() {
          elem.innerHTML = addTags(s, syntaxes[lang].build(s));
          delete loading[url];
        });
        loadingScript.src = url;
        loading[url] = loadingScript;
        document.head.appendChild(loadingScript);
      }
    });
  }


  function all(opt_className) {
    var className = opt_className || 'syntaxhiliter';
    var elems = document.getElementsByClassName(className);

    var l, s, stx;
    for (var i = 0, len = elems.length; i < len; i++) {
      if (hasClass(elems[i], 'hilited')) continue;
      
      l = getCodeLang(elems[i]);
      if (!l || !syntaxes[l]) {
        console.warn('Syntax Hiliter: syntax not defined');
        continue;
      }
      s = elems[i].innerHTML;
      elems[i].innerHTML = addTags(s, syntaxes[l].build(s));
      elems[i].className += ' hilited';
    }
  }


  function add(lang, syntax) {
    syntaxes[lang] = syntax;
  }

  
  var Syntax = function() {
    this._list = [];
    this._includes = [];
  };
  
  Syntax.prototype = {
    add: function(re, className) {
      var repTo = format('<{0} class="{1}">$0</{0}>',
                         [wrapperTagName, className]);
      this._list.push({re: re, repTo: repTo});
    },
    addKeywords: function(wds, className, opt_kwReStr) {
      wds.sort(function(a, b) {
        return a.length > b.length ? 1 : -1;
      });
      var kwReStr = opt_kwReStr ||
            '(^|[^a-zA-Z-_\'"])({0})(?=[^a-zA-Z-_\'"]|$)';
      var result = [];
      wds = wds.map(reQuote);
      for (var i = 0, len = wds.length; i < len; i++) {
        var re = new RegExp(format(kwReStr, [wds[i]]), 'gm');
        var repTo = format('$1<{0} class="{1}">$2</{0}>',
                           [wrapperTagName, className]);
        this._list.push({re: re, repTo: repTo});
      }
    },
    getList: function() {
      return this._list;
    },
    include: function(lang) {
      this._includes.push(lang);
    },
    build: function(str) {
      function build(re, repTo) {
        var l, i, n;
        var result = [];

        var r = re.exec(str);
        while (r) {
          n = regExpFormat(repTo, r);
          l = r[0].length;
          i = r.index;
          result.push({index: i, length: l, newString: n});
          r = re.exec(str);
        }

        return result;
      }

      function includeAll(includes) {
        var l = [];
        var s;
        for (var i = 0, len = includes.length; i < len; i++) {
          s = SyntaxHiliter.getSyntax(includes[i]);
          if (s) l = l.concat(s.getList());
        }
        return l;
      }

      function reduceOverlaps(xs) {
        var result = [];
        var lastIndex = 0;
        for (var i = 0, len = xs.length; i < len; i++) {
          var x = xs[i];
          if (x.index >= lastIndex) {
            result.push(x);
            lastIndex = x.index + x.length;
          }
        }
        return result;
      }

      function sortFunc(x, y) {
        return x.index > y.index ? 1 : -1;
      }


      var ls = this._list.concat(includeAll(this._includes));
      var result = [];
      for (var i = 0, len = ls.length; i < len; i++) {
        var d = ls[i];
        result = result.concat(build(d.re, d.repTo));
      }

      result = result.sort(sortFunc);
      result = reduceOverlaps(result);
      
      return result;
    }
  };
  

  return {
    Syntax: Syntax,
    add: add,
    all: all,
    lazyAll: lazyAll,
    regExpLib: regExpLib,
    getSyntax: getSyntax
  };
})();
