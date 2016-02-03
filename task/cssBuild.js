var glou                 = require('glou'),
    sourcemaps           = require('gulp-sourcemaps'),
    concat               = require('gulp-concat'),
    clean                = require('gulp-dest-clean'),
    minifyCss            = require('gulp-minify-css'),
    less                 = require('gulp-less'),
    LessPluginAutoPrefix = require('less-plugin-autoprefix'),
    autoprefix           = new LessPluginAutoPrefix({ browsers : ['last 2 versions'] });

var lessBuild = glou
  .src('./style/**/*.less')
  .pipe(sourcemaps.init)
  .pipe(less, function() { return { plugins : [autoprefix] }; })
  .pipe(minifyCss, {
    target : './build/css'
  })
  .pipe(concat, 'presentation.min.css')
  .pipe(sourcemaps.write)
  .dest('./build/css');


var concatCssLib = glou
  .src([
    'node_modules/reveal.js/css/reveal.css',
    'node_modules/reveal.js/css/theme/black.css',
    'node_modules/reveal.js/lib/css/zenburn.css',
    'node_modules/font-awesome/css/font-awesome.css'
  ])
  .pipe(sourcemaps.init)
  .pipe(minifyCss, {
    keepSpecialComments : 0,
    relativeTo          : 'node_modules/reveal.js',
    target              : './build/css'
  })
  .pipe(concat, 'lib.min.css')
  .pipe(sourcemaps.write)
  .dest('./build/css');

module.exports = glou
  .pipe(clean, './build/css')
  .parallel([concatCssLib, lessBuild]);



