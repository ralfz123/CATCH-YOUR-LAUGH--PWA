const gulp = require('gulp');

return gulp
    .src(['./static/icons/*'])
    .pipe(gulp.dest('./public/icons/'));
