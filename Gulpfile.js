/*eslint-env node*/

'use strict'

//  Load generic node stuff
const exec          = require('child_process').exec
const reload        = require('require-reload')(require)

//  Load package.json as JSON object
let pkg             = require('./package.json')

//  Load Gulp and its dependencies
const gulp          = require('gulp')
const autoprefixer  = require('gulp-autoprefixer')
const babel         = require('gulp-babel')
const bump          = require('gulp-bump')
const cssnano       = require('gulp-cssnano')
const header        = require('gulp-header')
const imagemin      = require('gulp-imagemin')
const notify        = require('gulp-notify')
const plumber       = require('gulp-plumber')
const rename        = require('gulp-rename')
const sass          = require('gulp-sass')
const sourcemaps    = require('gulp-sourcemaps')
const uglify        = require('gulp-uglify')
const util          = require('gulp-util')

//  Set banner template
const banner = [
  '/**',
  ' * <%= dest_file %>',
  ' * ',
  ' * <%= pkg.friendly_name %> - <%= pkg.description %>',
  ' * @version v<%= pkg.version %>',
  ' * @link <%= pkg.homepage %>',
  ' */',
  ''
].join('\n')

//  Set assets configuration
const assets_config = require('./config/assets.json')

//  Utility functions
let handleError = (error) => {
  util.log(error.toString())

  notify({
    message: error
  })

  return this.emit('end')
}

let progress = (message, file) => {
  if (undefined !== file) {
    message = file + ' - ' + message
  }

  return util.log('- ' + message)
}

let process_images = (config) => {
  const dest_dir   = config.dest.dir
  const source_dir = config.source.dir

  let stream = gulp.src(source_dir + '/**/*')
    .pipe(plumber({
      errorHandler: handleError
    })).on('end', () => {
      progress(source_dir + ' - Begin image compression')
    })

  stream = stream.pipe(imagemin()).on('end', () => {
    progress(dest_dir + ' - Images compressed')
  })

  stream = stream.pipe(gulp.dest(dest_dir)).on('end', () => {
    progress('Writing files to ' + dest_dir)
  }).on('error', handleError)

  return stream
}

let process_javascripts = (config) => {
  const dest_dir    = config.dest.dir
  const source_dir  = config.source.dir
  const dest_file   = config.dest.file
  const source_file = config.source.file

  let stream = gulp.src(source_dir + '/' + source_file)
    .pipe(plumber({
      errorHandler: handleError
    })).on('end', () => {
      progress('Begin Compilation', source_file)
    })

  stream = stream.pipe(sourcemaps.init()).on('end', () => {
    progress('Init Sourcemap', source_file)
  })

  stream = stream.pipe(babel()).on('end', () => {
    progress('Transpiling ES6', source_file)
  })

  stream = stream.pipe(gulp.dest(dest_dir)).on('end', () => {
    progress('Writing file to ' + dest_dir, source_file)
  }).on('error', handleError)

  stream = stream.pipe(uglify()).on('end', () => {
    progress('Uglifying', source_file)
  })

  stream = stream.pipe(rename({ extname: '.min.js' })).on('end', () => {
    progress('Renaming file', source_file)
  })

  stream = stream.pipe(header(banner, {
    dest_file: dest_file,
    pkg:       require('./package.json')
  })).on('end', () => {
    progress('Creating banner', source_file)
  })

  stream = stream.pipe(sourcemaps.write('.')).on('end', () => {
    progress('Generating Sourcemap', source_file)
  })

  stream = stream.pipe(gulp.dest(dest_dir)).on('end', () => {
    progress('Writing file to ' + dest_dir, source_file)
    notify(source_file + ' compiled')
  }).on('error', handleError)

  return stream
}

let process_stylesheets = (config) => {
  const dest_dir    = config.dest.dir
  const source_dir  = config.source.dir
  const dest_file   = config.dest.file
  const source_file = config.source.file

  let stream = gulp.src(source_dir + '/' + source_file)
    .pipe(plumber({
      errorHandler: handleError
    })).on('end', () => {
      progress('Begin Compilation', source_file)
    })

  stream = stream.pipe(sourcemaps.init()).on('end', () => {
    progress('Init Sourcemap', source_file)
  })

  stream = stream.pipe(sass()).on('end', () => {
    progress('Compile Sass', source_file)
  })

  stream = stream.pipe(autoprefixer()).on('end', () => {
    progress('Autoprefixing', source_file)
  })

  stream = stream.pipe(gulp.dest(dest_dir)).on('end', () => {
    progress('Writing file to ' + dest_dir, source_file)
  }).on('error', handleError)

  stream = stream.pipe(cssnano()).on('end', () => {
    progress('Minifying Compiled Styles', source_file)
  })

  stream = stream.pipe(rename({ extname: '.min.css' })).on('end', () => {
    progress('Renaming file', source_file)
  })

  stream = stream.pipe(header(banner, {
    dest_file: dest_file,
    pkg:       require('./package.json')
  })).on('end', () => {
    progress('Creating banner', source_file)
  })

  stream = stream.pipe(sourcemaps.write('.')).on('end', () => {
    progress('Generating Sourcemap', source_file)
  })

  stream = stream.pipe(gulp.dest(dest_dir)).on('end', () => {
    progress('Writing file to ' + dest_dir, source_file)
  }).on('error', handleError)

  return stream
}

gulp.task('images',      () => { return process_images(assets_config.images)           })
gulp.task('javascripts', () => { return process_javascripts(assets_config.javascripts) })
gulp.task('stylesheets', () => { return process_stylesheets(assets_config.stylesheets) })

gulp.task('all', [
  'images',
  'javascripts',
  'stylesheets'
])

gulp.task('watch', () => {
  gulp.watch(assets_config.images.source      + '/**',        ['images'])
  gulp.watch(assets_config.javascripts.source + '/**/*.js',   ['javascripts'])
  gulp.watch(assets_config.stylesheets.source + '/**/*.scss', ['stylesheets'])
})

gulp.task('default', [
  'all'
])
