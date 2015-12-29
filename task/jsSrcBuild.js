var glou       = require('glou'),
    sourcemaps = require('gulp-sourcemaps'),
    clean      = require('gulp-dest-clean'),
    uglify     = require('gulp-uglify'),
    concat     = require('gulp-concat');

module.exports = glou
  .pipe(clean, './build/js/src')
  .src('src/**/*.js')
  .pipe(sourcemaps.init)
  .pipe(uglify)
  .pipe(concat, 'src.min.js')
  .pipe(sourcemaps.write, function() {
    return {
      sourceRoot : function(file) {
        return '/src';
      }
    }
  })
  .dest('./build/js/src');
