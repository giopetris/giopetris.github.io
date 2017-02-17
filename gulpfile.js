var gulp = require('gulp'),
    minifyCSS = require('gulp-csso'),
    concat = require('gulp-concat'),
    cleanDest = require('gulp-clean-dest');

gulp.task('default', function() {
  var cssSources = [
    'node_modules/normalize.css/normalize.css',
    'node_modules/milligram/dist/milligram.css',
    'style.css'
  ];

  return gulp.src(cssSources)
    .pipe(cleanDest('build/'))
    .pipe(minifyCSS())
    .pipe(concat('style.min.css'))
    .pipe(gulp.dest('build/'))
});
