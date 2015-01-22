'use strict';

var gulp = require('gulp'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    sourcemaps = require('gulp-sourcemaps');

gulp.task('js', function () {
    gulp.src(['app/**/_*.js', 'app/**/*.js'])
        .pipe(sourcemaps.init())
        .pipe(concat('app.js'))
        .pipe(uglify())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('.'));
});

gulp.task('watch', ['js'], function () {
    gulp.watch('app/**/*.js', ['js']);
});