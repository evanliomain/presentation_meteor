var gulp                 = require('gulp'),
    concat               = require('gulp-concat'),
    less                 = require('gulp-less'),
    flo                  = require('fb-flo'),
    fs                   = require('fs'),
    path                 = require('path'),
    sourcemaps           = require('gulp-sourcemaps'),
    clean                = require('gulp-dest-clean'),
    minifyCss            = require('gulp-minify-css'),
    LessPluginAutoPrefix = require('less-plugin-autoprefix'),
    autoprefix           = new LessPluginAutoPrefix({ browsers : ['last 2 versions'] });

gulp.task('default', function() {
  // place code for your default task here
});



gulp.task('less', function () {
  return gulp
    .src('./style/**/*.less')
    .pipe(clean('./build/css'))
    .pipe(sourcemaps.init())
    .pipe(less({ plugins : [autoprefix] }))
    .pipe(minifyCss())
    .pipe(concat({ path: 'presentation.min.css' }))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('./build/css'));
});


gulp.task('serve', function() {
  var sourceDirToWatch = '.',
      server           = flo(sourceDirToWatch, {
        port    : 8888,
        host    : 'localhost',
        verbose : false,
        glob    : [
           // All JS files in `sourceDirToWatch` and subdirectories
          '**/*.js',
           // All LESS files in `sourceDirToWatch` and subdirectories
          '**/*.less'
        ]
      }, resolver);

    function resolver(filepath, callback) {
    // 1. Call into your compiler / bundler.
    // 2. Assuming that `bundle.js` is your output file, update `bundle.js`
    //    and `bundle.css` when a JS or CSS file changes.
    callback({
      resourceURL : 'bundle' + path.extname(filepath),
      // any string-ish value is acceptable. i.e. strings, Buffers etc.
      contents : fs.readFileSync(filepath),
      update   : function(_window, _resourceURL) {
        // this function is executed in the browser, immediately after the resource has been updated with new content
        // perform additional steps here to reinitialize your application so it would take advantage of the new resource
        console.log("Resource " + _resourceURL + " has just been updated with new content");
      }
    });
  }
});
