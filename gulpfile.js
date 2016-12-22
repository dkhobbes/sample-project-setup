var gulp = require('gulp');
var nodemon = require('gulp-nodemon');
var sourcemaps = require('gulp-sourcemaps');
var sass = require('gulp-sass');
var babel = require('gulp-babel');


gulp.task('default', ['sass', 'sass:watch', 'babel', 'babel:watch', 'start']);


gulp.task('start', function () {
  nodemon({
    script: './server/server.js',
    ext: 'js',
    env: { 'NODE_ENV': 'development' }
  })
});

gulp.task('sass', function () {
return gulp.src('./client/scss/**/*.scss')
  .pipe(sourcemaps.init())
  .pipe(sass().on('error', sass.logError))
  .pipe(sourcemaps.write('.'))
  .pipe(gulp.dest('./public'));
});

gulp.task('sass:watch', function () {
gulp.watch('./client/scss/**/*.scss', ['sass']);
});


gulp.task('babel', function() {
  return gulp.src('./client/js/**/*.js')
      .pipe(sourcemaps.init())
      .pipe(babel({
          presets: ['es2015', 'react'] // only es2015 preset now. React later.
      }))
      .pipe(sourcemaps.write('.'))
      .pipe(gulp.dest('public'));
});

gulp.task('babel:watch', function () {
  gulp.watch('./client/js/**/*.js', ['babel']);
});
