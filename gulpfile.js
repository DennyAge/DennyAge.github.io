'use strict';

const gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('build', () => {
  return gulp.src('styles/**/*.scss')
    .pipe(sass({
      outputStyle: 'nested',
    }).on('error', sass.logError))
    .pipe(gulp.dest('dist/css'));
});

gulp.task('build:watch', () => {
  gulp.watch('./styles/**/*.scss', gulp.series('build'));
});