var gulp = require('gulp'),
    connect = require('gulp-connect'),
    open = require('gulp-open');

gulp.task('serve', function() {
  connect.server({
    //livereload: true
  });
});

gulp.task('open', function() {
   var options = {
       url: 'http://localhost:8080',
       app: 'chrome'
   };
    gulp.src('./index.html')
        .pipe(open('', options));
});
 
gulp.task('default', ['serve']);
gulp.task('run', ['serve', 'open']);