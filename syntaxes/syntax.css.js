(function() {
  var syntax = new SyntaxHiliter.Syntax();
  var lib = SyntaxHiliter.regExpLib;

  syntax.add(lib.multiLine.slashStar, 'comment');
  syntax.add(lib.string.doubleQuote, 'string');
  syntax.add(lib.string.singleQuote, 'string');

  var keys = [
    '@charset', '@import', '@namespace', '@media', '@font-face', '@document',
    '@supports', '@keyframes', '!important'
  ];
  syntax.addKeywords(keys, 'keyword');

  var properties = [
    'animation', 'animation-name', 'animation-duration',
    'animation-timing-function', 'animation-delay',
    'animation-iteration-count', 'animation-direction', 'animation-play-state',
    'background', 'background-attachment', 'background-color',
    'background-image', 'background-position', 'background-repeat',
    'background-clip', 'background-origin', 'background-size', 'border',
    'border-bottom', 'border-bottom-color', 'border-bottom-style',
    'border-bottom-width', 'border-color', 'border-left', 'border-left-color',
    'border-left-style', 'border-left-width', 'border-right',
    'border-right-color', 'border-right-style', 'border-right-width',
    'border-style', 'border-top', 'border-top-color', 'border-top-style',
    'border-top-width', 'border-width', 'outline', 'outline-color',
    'outline-style', 'outline-width', 'border-bottom-left-radius',
    'border-bottom-right-radius', 'border-image', 'border-image-outset',
    'border-image-repeat', 'border-image-slice', 'border-image-source',
    'border-image-width', 'border-radius', 'border-top-left-radius',
    'border-top-right-radius', 'box-decoration-break', 'box-shadow',
    'overflow-x', 'overflow-y', 'overflow-style', 'rotation', 'rotation-point',
    'color-profile', 'opacity', 'rendering-intent', 'bookmark-label',
    'bookmark-level', 'bookmark-target', 'float-offset', 'hyphenate-after',
    'hyphenate-before', 'hyphenate-character', 'hyphenate-lines',
    'hyphenate-resource', 'hyphens', 'image-resolution', 'marks', 'string-set',
    'height', 'max-height', 'max-width', 'min-height', 'min-width', 'width',
    'box-align', 'box-direction', 'box-flex', 'box-flex-group', 'box-lines',
    'box-ordinal-group', 'box-orient', 'box-pack', 'font', 'font-family',
    'font-size', 'font-style', 'font-variant', 'font-weight', 'font-face',
    'font-size-adjust', 'font-stretch', 'content', 'counter-increment',
    'counter-reset', 'quotes', 'crop', 'move-to', 'page-policy',
    'grid-columns', 'grid-rows', 'target', 'target-name', 'target-new',
    'target-position', 'alignment-adjust', 'alignment-baseline',
    'baseline-shift', 'dominant-baseline', 'drop-initial-after-adjust',
    'drop-initial-after-align', 'drop-initial-before-adjust',
    'drop-initial-before-align', 'drop-initial-size', 'drop-initial-value',
    'inline-box-align', 'line-stacking', 'line-stacking-ruby',
    'line-stacking-shift', 'line-stacking-strategy', 'text-height',
    'list-style', 'list-style-image', 'list-style-position', 'list-style-type',
    'margin', 'margin-bottom', 'margin-left', 'margin-right', 'margin-top',
    'marquee-direction', 'marquee-play-count', 'marquee-speed',
    'marquee-style', 'column-count', 'column-fill', 'column-gap',
    'column-rule', 'column-rule-color', 'column-rule-style',
    'column-rule-width', 'column-span', 'column-width', 'columns', 'padding',
    'padding-bottom', 'padding-left', 'padding-right', 'padding-top', 'fit',
    'fit-position', 'image-orientation', 'page', 'size', 'bottom', 'clear',
    'clip', 'cursor', 'display', 'float', 'left', 'overflow', 'Specifies',
    'position', 'right', 'top', 'visibility', 'z-index', 'orphans',
    'page-break-after', 'page-break-before', 'page-break-inside', 'widows',
    'ruby-align', 'ruby-overhang', 'ruby-position', 'ruby-span', 'mark',
    'mark-after', 'mark-before', 'phonemes', 'rest', 'rest-after',
    'rest-before', 'voice-balance', 'voice-duration', 'voice-pitch',
    'voice-pitch-range', 'voice-rate', 'voice-stress', 'voice-volume',
    'border-collapse', 'border-spacing', 'caption-side', 'empty-cells',
    'table-layout', 'color', 'direction', 'letter-spacing', 'line-height',
    'text-align', 'text-decoration', 'text-indent', 'text-transform',
    'unicode-bidi', 'vertical-align', 'white-space', 'word-spacing',
    'hanging-punctuation', 'punctuation-trim', 'text-align-last',
    'text-justify', 'text-outline', 'text-overflow', 'text-shadow',
    'text-wrap', 'word-break', 'word-wrap', 'transform', 'transform-origin',
    'transform-style', 'perspective', 'perspective-origin',
    'backface-visibility', 'transition', 'transition-property',
    'transition-duration', 'transition-timing-function', 'transition-delay',
    'appearance', 'box-sizing', 'icon', 'nav-down', 'nav-index', 'nav-left',
    'nav-right', 'nav-up', 'outline-offset', 'resize'
  ];
  var propReStr = '(^|[{;\\s\\t\\n\\r])({0})($|[\\s\\t]*:)';
  syntax.addKeywords(properties, 'keyword', propReStr);

  var vendorPrefixes = [
    'webkit', 'moz', 'o', 'ms'
  ];
  var vpReStr = '(^|[{;\\s\\t])(-{0}-[a-zA-Z-]+)([\\s\\t]*:)';
  syntax.addKeywords(vendorPrefixes, 'keyword', vpReStr);
  

  SyntaxHiliter.add('css', syntax);
})();
