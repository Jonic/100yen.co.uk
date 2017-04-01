
'use strict';

var autoprefixer = require('gulp-autoprefixer');
var gulp         = require('gulp');
var coffee       = require('gulp-coffee');
var concat       = require('gulp-concat');
var notify       = require("gulp-notify");
var util         = require('gulp-util');
var rename       = require('gulp-rename');
var sass         = require('gulp-sass');
var shell        = require('gulp-shell');
var sourcemaps   = require('gulp-sourcemaps');

function handleError (error) {
  error = error.toString();
  util.log(error);
  notify(error);
  this.emit('end');
}

var config = {
  paths: {
    scripts: {
      files: {
        any:         'source/scripts/**/*.coffee',
        utils:       'source/scripts/utils.coffee',
        helpers:     'source/scripts/helpers/**/*.coffee',
        classes:     'source/scripts/classes/**/*.coffee',
        scenes:      'source/scripts/scenes/**/*.coffee',
        entities:    'source/scripts/entities/**/*.coffee',
        bootstrap:   'source/scripts/bootstrap.coffee',
        master:      'source/scripts/master.coffee'
      },
      dest: 'assets/js'
    },
    styles: {
      files: {
        any:   'source/styles/**/*.scss',
        input: 'source/styles/master.scss'
      },
      dest: 'assets/css'
    }
  }
};

gulp.task('scripts', function () {
  var files = config.paths.scripts.files;

  return gulp.src([
      files.master
    ])
    .on('error', handleError)
    .pipe(sourcemaps.init())
    .on('error', handleError)
    .pipe(coffee({
      bare: true
    }))
    .on('error', handleError)
    .pipe(concat('master.js'))
    .on('error', handleError)
    .pipe(sourcemaps.write())
    .on('error', handleError)
    .pipe(gulp.dest(config.paths.scripts.dest))
    .on('error', handleError);
});

gulp.task('styles', function () {
  var files = config.paths.styles.files;

  return gulp.src(files.input)
    .pipe(sourcemaps.init())
    .on('error', handleError)
    .pipe(sass({
      compressed: false
    }))
    .on('error', handleError)
    .pipe(autoprefixer())
    .on('error', handleError)
    .pipe(sourcemaps.write())
    .on('error', handleError)
    .pipe(gulp.dest(config.paths.styles.dest))
    .on('error', handleError);
});

gulp.task('watch', function () {
  gulp.watch(config.paths.scripts.files.any, ['scripts']);
  gulp.watch(config.paths.styles.files.any,  ['styles']);
});

gulp.task('default', [
  'scripts',
  'styles',
  'watch'
]);
