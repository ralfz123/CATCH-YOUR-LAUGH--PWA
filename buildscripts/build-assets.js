const gulp = require('gulp');

return gulp.src(['./static/assets/*']).pipe(gulp.dest('./public/assets'));
