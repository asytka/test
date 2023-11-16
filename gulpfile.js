const gulp = require('gulp');
const browserSync = require('browser-sync').create();
const autoprefixer = require('gulp-autoprefixer');

function browserSyncTask() {
    browserSync.init({
        server: {
            baseDir: './app',
        },
    });

    gulp.watch('./app/*.html').on('change', browserSync.reload);
    gulp.watch('./app/css/*.css').on('change', browserSync.reload);
    gulp.watch('./app/js/*.js').on('change', browserSync.reload);
}

gulp.task("prefix", () => (
    gulp.src('app/css/style.css') // Change 'css/style.css' to 'app/css/style.css'
        .pipe(autoprefixer({
            cascade: false
        }))
        .pipe(gulp.dest('dist/css')) // Change 'dist' to 'dist/css'
));

gulp.task("html", function () {
    return gulp.src("app/*.html") // Change 'src/*.html' to 'app/*.html'
        .pipe(gulp.dest("dist"));
});

exports.build = gulp.series("prefix", "html"); // Combine the tasks into one 'build' task
exports.default = browserSyncTask;
