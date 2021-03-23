const gulp = require('gulp');

return gulp
    .src('./src/icons/*')
    .pipe(gulp.dest('./public/icons/'));
