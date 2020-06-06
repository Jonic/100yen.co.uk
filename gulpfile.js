const cssnano = require('gulp-cssnano')
const connect = require('gulp-connect-php')
const { dest, parallel, src, task, watch } = require('gulp')
const rename = require('gulp-rename')
const sass = require('gulp-dart-sass')
const sourcemaps = require('gulp-sourcemaps')
const stripComments = require('gulp-strip-css-comments')

const compileSass = (file) => {
  console.log(file)
  return src(file)
    .pipe(sass().on('error', (error) => console.log(error)))
    .pipe(sourcemaps.init())
    .pipe(stripComments())
    .pipe(cssnano())
    .pipe(rename({ extname: '.css' }))
    .pipe(sourcemaps.write('.'))
    .pipe(dest((file) => file.base))
}

task('startServer', () => connect.server())

task('watchApplicationSass', () =>
  watch(['./app/assets/stylesheets/**/*.scss']).on('change', () =>
    compileSass('app/assets/stylesheets/application.scss')
  )
)

task('watchPagesSass', () =>
  watch(['./app/pages/**/*.scss']).on('change', (file) => compileSass(file))
)

task(
  'default',
  parallel('startServer', 'watchApplicationSass', 'watchPagesSass')
)
