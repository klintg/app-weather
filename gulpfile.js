var gulp = require("gulp");
var browserify = require("browserify")
var reactify = require('reactify')
var source = require('vinyl-source-stream')

gulp.task ('browserify', function() {
  browserify('./src/index.js')
      .transform('babelify', {presets: 'react'})
      .bundle()
      .pipe(source('bundle.js'))
      .pipe(gulp.dest('dist'))
})

// gulp.task('copy', function() {
//   gulp.src('src/js/vend/*.*')
//     .pipe(gulp.dest('dist/js'))
// })

gulp.task('default', ['browserify'])
