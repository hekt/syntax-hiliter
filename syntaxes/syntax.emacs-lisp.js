(function() {
  var syntax = new SyntaxHiliter.Syntax();
  var lib = SyntaxHiliter.regExpLib;
  
  syntax.add(lib.singleLine.semicolon, 'comment');
  syntax.add(lib.string.doubleQuote, 'string');
  syntax.add(lib.multiLine.doubleQuote, 'string');

  var keywords = [
    'consp', 'atom', 'listp', 'nlistp', 'null', 'cons', 'list', 'make-list',
    'append', 'car', 'cdr', 'car-safe', 'cdr-safe', 'nth', 'nthcdr', 'setcar',
    'setcdr', 'nconc', 'reverse', 'nreverse', 'sort', 'memq', 'delq',
    'sequencep', 'copy-sequence', 'length', 'elt', 'assoc', 'assq', 'rassq',
    'copy-alist', 'set', 'setq', 'identity', 'quote', 'let*', 'integerp',
    'zerop', 'natnump', 'eq', 'equal', '=', '/=', '<', '<=', '>', '>=', 'max',
    'min', 'if', 'cond', 'while', 'not', 'and', 'or', '1+', '1-', '+', '-',
    '*', '/', '%', 'defun', 'lambda', 'mapcar', 'mapconcat', 'funcall',
    'apply', 'nil', 't'
  ];
  var kwsReStr = "(^|['\\(\\s\\t])({0})([\\)\\s\\t]|$)";
  syntax.addKeywords(keywords, 'keyword', kwsReStr);
  syntax.addKeywords(['\''], 'keyword', "(^|['\\(\\s\\t])({0})([^\\s\\t]|$)");

  SyntaxHiliter.add('emacs-lisp', syntax);
  SyntaxHiliter.add('elisp', syntax);
  SyntaxHiliter.add('lisp', syntax);
})();
