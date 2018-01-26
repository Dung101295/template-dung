var gulp = require('gulp');
var pug = require('gulp-pug');
var less = require('gulp-less');
var minifyCSS = require('gulp-csso');
var clean = require('gulp-clean');
var del = require('del');

gulp.task('clean', function () {
  return del('build/html');
});

gulp.task('html', function(){
  return gulp.src('app/views/*.pug')
    .pipe(pug())
    .pipe(gulp.dest('build/html'))
});

gulp.task('css', function(){
  return gulp.src('app/assets/css/css/*.less')
    .pipe(less())
    .pipe(gulp.dest('build/assets/css/css'))
});
gulp.task('images', function(){
  return gulp.src('app/assets/images/*')
    .pipe(gulp.dest('build/assets/images/'))
});
gulp.task('css:libs', function(){
  return gulp.src('app/assets/css/libs/uikit-v2/*')
    .pipe(gulp.dest('build/assets/css/libs/uikit-v2'))
});
gulp.task('css:components', function(){
  return gulp.src('app/assets/css/libs/uikit-v2/*/*')
    .pipe(gulp.dest('build/assets/css/libs/uikit-v2'))
});
gulp.task('js', function(){
  return gulp.src('app/scripts/js/*')
   .pipe(gulp.dest('build/scripts/js/'))
});
gulp.task('js:lib', function(){
  return gulp.src('app/scripts/lib/*')
   .pipe(gulp.dest('build/scripts/lib/'))
});
gulp.task('js:components', function(){
  return gulp.src('app/scripts/lib/components/*')
   .pipe(gulp.dest('build/scripts/lib/components/'))
});

// gulp.task('default', [ 'html', 'css', 'css:libs', 'images', 'script', 'script:libs' ]);
gulp.task('default', ['html', 'css', 'css:libs', 'images', 'css:components', 'js', 'js:lib', 'js:components' ]);
gulp.task('build', [ 'clean', 'default']);
