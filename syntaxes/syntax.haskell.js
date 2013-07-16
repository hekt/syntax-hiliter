(function() {
  var syntax = new SyntaxHiliter.Syntax();
  var lib = SyntaxHiliter.regExpLib;
  
  syntax.add(lib.singleLine.doubleDash, 'comment');
  syntax.add(lib.multiLine.braceDash, 'comment');
  syntax.add(lib.string.singleQuote, 'string');
  syntax.add(lib.string.doubleQuote, 'string');

  var keywords = [
    'class', 'data', 'default', 'deriving', 'do', 'else', 'if', 'import',
    'in', 'infix', 'infixl', 'infixr', 'instance', 'let', 'module', 'newtype',
    'of', 'then', 'type', 'where',
    '_', ':', '::', '=', '\\', '|', '<', '-', '->', '@', '~', '=>'
  ];
  syntax.addKeywords(keywords, 'keyword');

  SyntaxHiliter.add('haskell', syntax);
  SyntaxHiliter.add('hs', syntax);
})();
