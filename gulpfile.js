const gulp = require('gulp');
const browserSync = require('browser-sync').create();
const sass = require('gulp-sass')(require('sass'));

function browserSyncTask() {
    browserSync.init({
        server: {
            baseDir: './app',
        },
    });

    gulp.watch('./app').on('change', browserSync.reload);
    gulp.watch('./app/dist').on('change', browserSync.reload);
    gulp.watch('./js/*.js').on('change', browserSync.reload);
    gulp.watch('./app/sass').on('change', compileSass);
}

function compileSass() {
    return gulp
        .src('./app/sass/*.sass')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./app/dist'));
}

function watchSass() {
    gulp.watch('.app/sass/style.sass', compileSass);
}


exports.default = gulp.parallel(browserSyncTask, compileSass, watchSass);
exports.build = gulp.series(compileSass, watchSass);