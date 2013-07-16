(function() {
  var syntax = new SyntaxHiliter.Syntax();
  var lib = SyntaxHiliter.regExpLib;
  
  syntax.add(lib.singleLine.hash, 'comment');
  syntax.add(lib.string.doubleQuote, 'string');
  syntax.add(lib.string.singleQuote, 'string');
  syntax.add(lib.multiLine.tripleDoubleQuote, 'string');
  syntax.add(lib.multiLine.tripleSingleQuote, 'string');

  var keywords = [
    'and', 'as', 'assert', 'break', 'class', 'continue', 'def', 'del', 'elif',
    'else', 'except', 'exec', 'False', 'finally', 'for', 'from', 'global',
    'if', 'import', 'in', 'is', 'lambda', 'None', 'nonlocal', 'not', 'or',
    'pass', 'print', 'raise', 'return', 'True', 'try', 'while', 'with', 'yield'
  ];
  syntax.addKeywords(keywords, 'keyword');

  SyntaxHiliter.add('python', syntax);
  SyntaxHiliter.add('py', syntax);
})();
