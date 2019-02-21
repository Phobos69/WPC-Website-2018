var gulp = require('gulp');
var sass = require('gulp-sass');
var nunjucksRender = require('gulp-nunjucks-render');

sass.compiler = require('node-sass');

gulp.task('nunjucks', function () {
  // Gets .html and .nunjucks files in pages
  return gulp.src('app/pages/**/*.+(html|nunjucks|njk)')
    // Renders template with nunjucks
    .pipe(nunjucksRender({
      path: ['app/templates']
    }))
    // output files in app folder
    .pipe(gulp.dest('public'))
});

gulp.task('sass', function () {
  return gulp.src('app/stylesheets/**/*.scss')
    .pipe(sass.sync().on('error', sass.logError))
    .pipe(gulp.dest('public/css'));
});
