(function() {
  var syntax = new SyntaxHiliter.Syntax();
  var lib = SyntaxHiliter.regExpLib;

  syntax.add(lib.string.doubleQuote, 'string');
  syntax.add(lib.string.singleQuote, 'string');
  syntax.add(lib.singleLine.hash, 'comment');

  var keywords = [
    '!', 'case', 'do', 'done', 'elif', 'else', 'esac', 'fi', 'for',
    'function', 'if', 'in', 'select', 'then', 'until', 'while', '{', '}',
    'time', '[[', ']]', '$', '%'
  ];
  syntax.addKeywords(keywords, 'keyword');
  

  SyntaxHiliter.add('bash', syntax);
  SyntaxHiliter.add('shell', syntax);
  SyntaxHiliter.add('shell-script', syntax);
})();
