const gulp = require('gulp');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const rename = require("gulp-rename");
const cssnano = require('gulp-cssnano');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const imagemin = require('gulp-imagemin');
const browsersync = require('browser-sync').create();
sass.compiler = require('sass');

const paths = {
  styles: {
    src: 'app/css/**/*.scss',
    dest: 'build/css'
  },
  scripts: {
    src: 'app/js/**/*.js',
    dest: 'build/js'
  },
  html: {
    src: 'app/**/*.html',
    dest: 'build/'
  },
  images: {
    src: 'app/img/*.*',
    dest: 'build/img'
  }
}

function browserSync(done) {
  browsersync.init({
    server: {
      baseDir: './build'
    },
    port: 3000
  })
  done();
}

function browserSyncReload(done) {
  browsersync.reload();
  done();
}


function styles() {
  return gulp.src(paths.styles.src)
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer())
    .pipe(cssnano())
    .pipe(rename({ suffix: '.min' }))
    .pipe(gulp.dest(paths.styles.dest))
};

function scripts() {
  return gulp.src(paths.scripts.src)
    .pipe(concat('main.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest(paths.scripts.dest))
    .pipe(browsersync.stream())
}

function html() {
  return gulp.src(paths.html.src)
    .pipe(gulp.dest(paths.html.dest))
    .pipe(browsersync.stream())
}

function images() {
  return gulp.src(paths.images.src)
    .pipe(imagemin())
    .pipe(gulp.dest(paths.images.dest))
    .pipe(browsersync.stream())
}

function watch() {
  gulp.watch('path.styles.src', styles);
  gulp.watch('path.scripts.src', scripts);
  gulp.watch('path.html.src', html);
  gulp.watch('path.images.src', images);
  gulp.watch('./app/*.html', gulp.series(browserSyncReload));
}

const build = gulp.series(gulp.parallel(styles, scripts, html, images))
gulp.task('build', build);
gulp.task('default', gulp.parallel(watch, build, browserSync))

