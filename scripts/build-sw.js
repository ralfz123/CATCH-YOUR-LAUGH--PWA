const gulp = require('gulp');

return gulp
    .src( './src/service-worker.js')
    .pipe(gulp.dest('./public'));
