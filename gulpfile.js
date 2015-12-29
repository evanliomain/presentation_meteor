var gulp    = require('gulp'),
    glou    = require('glou'),
    gutil   = require('gulp-util'),
    path    = require('path'),
    express = require('express'),
    tinylr;

var cssBuild   = require('./task/cssBuild'),
    jsBuild    = require('./task/jsBuild'),
    jsSrcBuild = require('./task/jsSrcBuild'),
    build      = glou.parallel([cssBuild, jsBuild, jsSrcBuild]);

glou.task('less',  cssBuild);
glou.task('js',    jsBuild);
glou.task('jsSrc', jsSrcBuild);
glou.task('build', build);

gulp.task('express',    expressTask);
gulp.task('livereload', livereloadTask);

gulp.task('watch', function() {
  gulp.watch('**/*.html',            notifyLiveReload);
  gulp.watch('**/*.css',             notifyLiveReload);
  gulp.watch('build/js/src/**/*.js', notifyLiveReload);
  gulp.watch('src/**/*.js',          ['jsSrc']);
  gulp.watch('style/*.less',         ['less']);
});

gulp.task('serve', ['build', 'express', 'livereload', 'watch'], function() {});


function livereloadTask() {
  tinylr = require('tiny-lr')();
  tinylr.listen(35729);
}

function expressTask() {
  var app = express();
  app.use(require('connect-livereload')({ port : 35729 }));
  app.use(express.static(__dirname));
  app.listen(4000, '0.0.0.0');
}

function notifyLiveReload(event) {
  var fileName = path.relative(__dirname, event.path);

  gutil.log('change', fileName);

  tinylr.changed({
    body: {
      files: [fileName]
    }
  });
}

