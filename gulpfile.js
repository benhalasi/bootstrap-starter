const gulp = require('gulp')
const sass = require('gulp-sass')
const ts = require('gulp-typescript')

const src = 'docs/src/'
const target = 'docs/target/'

const browserSync = require('browser-sync').create()

gulp.task('sass', () => {
  return gulp.src(src + 'scss/*.scss')
    .pipe(sass())
    .pipe(gulp.dest(target + 'css'))
    .pipe(browserSync.reload({
      stream: true
    }))
});

gulp.task('ts', () => {
  return gulp.src(src + 'ts/*.ts')
    .pipe(ts({
      'noImplicitAny': true,
      'target': 'es5'
    }))
    .pipe(gulp.dest(target + 'js'))
    .pipe(browserSync.reload({
      stream: true
    }))
});

gulp.task('bootstrap', () => {
  return gulp.src('node_modules/bootstrap/dist/js/bootstrap.bundle.min.js')
    .pipe(gulp.dest(target + 'js'))
});

gulp.task('jquery', () => {
  return gulp.src('node_modules/jquery/dist/jquery.min.js')
    .pipe(gulp.dest(target + 'js'))
});

gulp.task('build', gulp.parallel('bootstrap', 'jquery', 'sass', 'ts'))

gulp.task('watch', gulp.series('build', () => {
  browserSync.init({
    server: {
      baseDir: 'docs'
    },
  })

  gulp.watch(src + 'scss/*.scss').on('change', gulp.series('sass'))
  gulp.watch(src + 'ts/*.ts').on('change', gulp.series('ts'))
  gulp.watch(['docs/*.html']).on('change', browserSync.reload)
}));


gulp.task('default', gulp.series('watch'))