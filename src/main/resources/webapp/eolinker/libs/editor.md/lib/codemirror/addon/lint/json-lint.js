!function(e){"object"==typeof exports&&"object"==typeof module?e(require("../../lib/codemirror")):"function"==typeof define&&define.amd?define(["../../lib/codemirror"],e):e(CodeMirror)}(function(e){"use strict";e.registerHelper("lint","json",function(o){var r=[];jsonlint.parseError=function(o,t){var n=t.loc;r.push({from:e.Pos(n.first_line-1,n.first_column),to:e.Pos(n.last_line-1,n.last_column),message:o})};try{jsonlint.parse(o)}catch(t){}return r})});