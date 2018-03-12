var gulp = require('gulp'),
    uglify = require('gulp-uglify'),
    sass = require('gulp-sass'),
    rename = require('gulp-rename'),
    babel = require('gulp-babel');

gulp.task('css', function () {
  gulp.src('scss/*.scss')
      .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
      .pipe(rename({suffix: '.min'}))
      .pipe(gulp.dest('css'));
  gulp.src('scss/*.scss')
      .pipe(sass({outputStyle: 'expanded'}).on('error', sass.logError))
      .pipe(gulp.dest('css'))
})
.task('js', function () {
  gulp.src('js/tipfy.js')
      .pipe(babel({presets: ['env']}))
      .pipe(uglify({preserveComments: false}))
      .pipe(rename({suffix: '.es5.min'}))
      .pipe(gulp.dest('js'))
})
.task('watch', function () {
  gulp.watch('scss/*.scss', ['css'])
  gulp.watch('js/*.js', ['js'])
})
.task('default', ['watch']);
