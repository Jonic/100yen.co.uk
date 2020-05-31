const cssnano = require('gulp-cssnano')
const gulp = require('gulp')
const postcss = require('gulp-postcss')
const postcssAutoprefixer = require('autoprefixer')
const postcssObjectFitImages = require('postcss-object-fit-images')
const rename = require('gulp-rename')
const sass = require('gulp-dart-sass')
const sourcemaps = require('gulp-sourcemaps')
const stripComments = require('gulp-strip-css-comments')

const compileSass = (event) => {
  const src = ''
  const dest = ''

  return gulp
    .src(src)
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(stripComments())
    .pipe(
      postcss([
        postcssAutoprefixer({
          flexbox: true,
          grid: true,
        }),
        postcssObjectFitImages,
      ])
    )
    .pipe(cssnano())
    .pipe(rename({ extname: '.min.css' }))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(dest))
}

const watch = () => {
  return gulp.watch(
    ['./app/assets/sass/**/*.scss', './app/pages/**/*.scss'],
    (event) => {
      compileSass()
    }
  )
}

gulp.task('watch', watch)
gulp.task('default', gulp.series(watch))
