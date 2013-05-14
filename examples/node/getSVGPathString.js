#!/usr/bin/env node
// Generated by CoffeeScript 1.6.2
(function() {
  var fs, glyph, ttf, ttfjs;

  fs = require('fs');
  ttfjs =  require('../../')

  if (process.argv.length > 3) {
    ttf = ttfjs.TrueType.createFromBuffer(fs.readFileSync(process.argv[2]));
    glyph = ttf.getGlyphById(parseInt(process.argv[3], 10));
    console.log(glyph.toSVGPathString({
      relative: true,
      matrix: {
        a: 1, c:  0, e: 0,
        b: 0, d: -1, f: 0
      }
    }));
  }

}).call(this);