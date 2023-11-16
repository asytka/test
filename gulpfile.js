const gulp = require('gulp');
const browserSync = require('browser-sync').create();
const sass = require('gulp-sass')(require('sass'));
const cssnano = require('gulp-cssnano');
const rename = require('gulp-rename');
const autoprefixer = require('gulp-autoprefixer');

function minCss() {
    return gulp.src('./app/dist/*.css')
        .pipe(cssnano())
        .pipe(autoprefixer({
            overrideBrowserslist: [
                'last 2 versions',
                'IE 11',
                'Safari >= 10',
                'Firefox ESR',
            ],
            cascade: false, // Do not cascade the prefixes
        }))
        .pipe(rename(function (path){
            path.basename = path.basename + '.min';
        }))
        .pipe(gulp.dest('./app/css/'));
}
function browserSyncTask() {
    browserSync.init({
        server: {
            baseDir: './app',
        },
    });

    gulp.watch('./app/').on('change', browserSync.reload);
    gulp.watch('./app/dist').on('change', browserSync.reload);
    gulp.watch('./app/js/*.js').on('change', browserSync.reload);
    gulp.watch('./app/sass').on('change', gulp.series(compileSass, minCss));

}

function compileSass() {
    return gulp
        .src('./app/sass/*.sass')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./app/dist'))
}

function watchSass() {
    gulp.watch('.app/sass/style.sass', compileSass);
}


exports.default = gulp.parallel(browserSyncTask, compileSass, watchSass, minCss);
exports.build = gulp.series(compileSass, watchSass);