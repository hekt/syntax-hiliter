(function() {
  var syntax = new SyntaxHiliter.Syntax();
  var lib = SyntaxHiliter.regExpLib;

  syntax.add(lib.multiLine.exclamationDash, 'comment');
  syntax.add(lib.string.doubleQuote, 'string');
  syntax.add(lib.string.singleQuote, 'string');
  syntax.add(/&amp;([a-zA-Z]+|#[0-9]+);/gm, 'string');

  var keywords = [
    'a', 'abbr', 'acronym', 'address', 'applet', 'area', 'article', 'aside',
    'audio', 'b', 'base', 'basefont', 'bdi', 'bdo', 'bgsound', 'big', 'blink',
    'blockquote', 'body', 'br', 'button', 'canvas', 'caption', 'center',
    'cite', 'code', 'col', 'colgroup', 'command', 'datalist', 'dd', 'del',
    'details', 'dfn', 'dir', 'div', 'dl', 'dt', 'em', 'embed', 'fieldset',
    'figcaption', 'figure', 'font', 'footer', 'form', 'frame', 'frameset',
    'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'head', 'header', 'hgroup', 'hr',
    'html', 'i', 'iframe', 'img', 'input', 'ins', 'isindex', 'kbd', 'keygen',
    'label', 'legend', 'li', 'link', 'listing', 'map', 'mark', 'marquee',
    'menu', 'meta', 'meter', 'nav', 'nobr', 'noframes', 'noscript', 'object',
    'ol', 'optgroup', 'option', 'output', 'p', 'param', 'plaintext', 'pre',
    'progress', 'q', 'rp', 'rt', 'ruby', 's', 'samp', 'script', 'section',
    'select', 'small', 'source', 'spacer', 'span', 'strike', 'strong',
    'style', 'sub', 'summary', 'sup', 'table', 'tbody', 'td', 'textarea',
    'tfoot', 'th', 'thead', 'time', 'title', 'tr', 'track', 'tt', 'u', 'ul',
    'var', 'video', 'wbr', 'xmp'
  ];
  var kwsReStr = '(</?|&lt;/?)({0})($|&gt;|[/>\\s\\t])';
  syntax.addKeywords(keywords, 'keyword', kwsReStr);
  

  SyntaxHiliter.add('html', syntax);
  SyntaxHiliter.add('xhtml', syntax);
})();
