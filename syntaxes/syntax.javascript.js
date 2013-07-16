(function() {
  var syntax = new SyntaxHiliter.Syntax();
  var lib = SyntaxHiliter.regExpLib;

  syntax.add(lib.multiLine.slashStar, 'comment');
  syntax.add(lib.singleLine.doubleSlash, 'comment');
  syntax.add(lib.string.doubleQuote, 'string');
  syntax.add(lib.string.singleQuote, 'string');

  var keywords = [
    'break', 'case', 'catch', 'continue', 'debugger', 'default', 'delete',
    'do', 'else', 'finally', 'for', 'function', 'if', 'in', 'instanceof',
    'new', 'return', 'switch', 'this', 'throw', 'try', 'typeof', 'var',
    'void', 'while', 'with', 'class', 'enum', 'export', 'extends', 'import',
    'super', 'implements', 'interface', 'let', 'package', 'private',
    'protected', 'public', 'static', 'yield', 'null', 'true', 'false',
    'undefined'
  ];
  syntax.addKeywords(keywords, 'keyword');

  SyntaxHiliter.add('javascript', syntax);
  SyntaxHiliter.add('js', syntax);
})();
