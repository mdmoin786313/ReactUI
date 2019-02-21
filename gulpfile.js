'use strict';

var gulp = require("gulp");
var sass = require("gulp-sass");

var SCSS_SRC = "./src/Assets/scss/**/*.scss";
var SCSS_DEST = "./src/Assets/css";

gulp.task('sass', ()=>{
    gulp.src(SCSS_SRC)
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest(SCSS_DEST));
});

gulp.task('sass:watch', ()=>{
    gulp.watch(SCSS_SRC, ['sass']);
});

gulp.task('default', ['sass']);