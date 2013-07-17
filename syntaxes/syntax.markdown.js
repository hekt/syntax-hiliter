(function() {
  var syntax = new SyntaxHiliter.Syntax();
  var lib = SyntaxHiliter.regExpLib;

  syntax.include('html');
  
  // heading
  syntax.add(/^#+[\s\t].*?$/gm, 'string');
  syntax.add(/^.*$(\n|\r\n?)[-=]+$/gm, 'string');
  // emphasis
  syntax.add(/(\*{1,2}).*?\1/gm, 'string');
  syntax.add(/(_{1,2}).*?\1/gm, 'string');
  // code
  syntax.add(/(`+).*?\1/gm, 'string');
  syntax.add(/^\s{4}.*$/gm, 'string');
  syntax.add(/```[\s\S]*?```/gm, 'string');
  // link
  syntax.add(/\[.*?\]\(.*?\)/gm, 'string');
  syntax.add(/\[.*?\]\s?\[.*?\]/gm, 'string');
  syntax.add(/^\s{0,3}\[.*?\]:[\s\t]+/gm, 'string');
  // image
  syntax.add(/!\[.*?\]\(.*?\)/gm, 'string');
  syntax.add(/!\[.*?\]\s?\[.*?\]/gm, 'string');

  // horizontal line
  syntax.add(/(\*\s*){3,}/gm, 'keyword');
  syntax.add(/(-\s*){3,}/gm, 'keyword');
  syntax.add(/(_\s*){3,}/gm, 'keyword');
  // list marker
  syntax.add(/^[\s\t]{0,3}[-\+\*][\s\t]/gm, 'keyword');
  syntax.add(/^[\s\t]{0,3}[0-9]+\.[\s\t]/gm, 'keyword');
  // quote symbol
  syntax.add(/^((&gt;|>)[\s\t]+)+/gm, 'keyword');

  SyntaxHiliter.add('markdown', syntax);
  SyntaxHiliter.add('mdown', syntax);
  SyntaxHiliter.add('mdwn', syntax);
  SyntaxHiliter.add('md', syntax);
})();
