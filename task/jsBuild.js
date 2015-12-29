var glou       = require('glou'),
    sourcemaps = require('gulp-sourcemaps'),
    clean      = require('gulp-dest-clean'),
    uglify     = require('gulp-uglify'),
    concat     = require('gulp-concat');

var jsLibBuild = [
  glou.src('node_modules/reveal.js/js/reveal.js')
  .pipe(sourcemaps.init)
  .pipe(uglify)
  .pipe(concat, 'lib.min.js')
  .pipe(sourcemaps.write, function() {
    return {
      sourceRoot : function(file) {
        return '/node_modules/reveal.js/js';
      }
    }
  })
  .dest('./build/js/lib/reveal')
];

var jsMap = [{
  src : [
    'node_modules/reveal.js/lib/js/head.min.js',
    'node_modules/reveal.js/lib/js/classList.js',
    'node_modules/reveal.js/plugin/markdown/marked.js',
    'node_modules/reveal.js/plugin/markdown/markdown.js',
    'node_modules/reveal.js/plugin/highlight/highlight.js',
    'node_modules/reveal.js/plugin/zoom-js/zoom.js',
    'node_modules/reveal.js/plugin/notes/notes.js',
    'node_modules/reveal.js/plugin/notes/notes.html'
  ],
  dest : './build/js/lib/reveal'
}, {
  src : [
    'node_modules/d3/d3.min.js'
  ],
  dest : './build/js/lib/d3'
}]


jsMap.forEach(function(map) {
  jsLibBuild.push(glou.src(map.src).dest(map.dest));
});


module.exports = glou.pipe(clean, './build/js/lib')
                     .parallel(jsLibBuild);


