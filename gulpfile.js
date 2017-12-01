var less = require('gulp-less');
var path = require('path');
var gulp = require('gulp');

// define the default task and add the watch task to it
gulp.task('default', ['watch']);

gulp.task('less', function () {
  return gulp.src('less/*.less')
    .pipe(less({
      paths: [ path.join(__dirname, 'less') ]
    }))
    .pipe(gulp.dest('css'));
});

gulp.task('watch', function () {
	gulp.watch('less/*.less', ['less']);
});