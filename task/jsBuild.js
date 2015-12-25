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
  .pipe(sourcemaps.write)
  .dest('./build/js')
];

jsLibBuild.push(glou.src([
  'node_modules/reveal.js/lib/js/head.min.js',
  'node_modules/reveal.js/lib/js/classList.js',
  'node_modules/reveal.js/plugin/markdown/marked.js',
  'node_modules/reveal.js/plugin/markdown/markdown.js',
  'node_modules/reveal.js/plugin/highlight/highlight.js',
  'node_modules/reveal.js/plugin/zoom-js/zoom.js',
  'node_modules/reveal.js/plugin/notes/notes.js',
  'node_modules/reveal.js/plugin/notes/notes.html'
]).dest('./build/js'));


module.exports = glou.pipe(clean, './build/js')
                     .parallel(jsLibBuild);


