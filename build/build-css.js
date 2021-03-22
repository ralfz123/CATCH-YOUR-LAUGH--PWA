const gulp = require('gulp');
const cleanCSS = require('gulp-clean-css');

return gulp
  .src(['./static/styles/main.css'])
  .pipe(cleanCSS())
  .pipe(gulp.dest('./public/css'));
