var gulp = require('gulp'),
    connect = require('gulp-connect'),
    open = require('gulp-open'),
    start = require('gulp-start-process');

gulp.task('serve', function() {
  connect.server({
      port:3000
  });
});

gulp.task('openWeb', function() {
   var options = {
       url: 'http://localhost:3000',
       app: 'chrome'
   };
    gulp.src('./index.html')
        .pipe(open('', options));
});

gulp.task('openApp', function(cb) {
    var chromePath = '"C:\Program Files (x86)\Google\Chrome\Application\chrome.exe"';
    var projectPath = './';
    var command = chromePath + ' --load-and-launch-app=' + projectPath;
    
    start(command, cb);
});
 
gulp.task('default', ['serve']);
gulp.task('runWeb', ['serve', 'openWeb']);
gulp.task('runApp', ['openApp']);