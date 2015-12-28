var gulp = require('gulp');
var $ = require('gulp-load-plugins')();

// Lint JavaScript
gulp.task('lint', function() {
  return gulp.src('assets/js/*.js')
      .pipe($.jshint())
      .pipe($.jshint.reporter('jshint-stylish'));
});

// Compile SASS into CSS
gulp.task('sass', function() {
  gulp.src('assets/sass/app.scss')
      .pipe($.sass())
      .pipe(gulp.dest('assets/css'))
});


// Watch for changes
gulp.task('watch', function() {
  gulp.watch('assets/sass/**.scss', [ 'sass' ]);
  gulp.watch('assets/js/**.js', [ 'lint' ]);
});

// Default task
gulp.task('default', [ 'sass', 'lint' ]);
