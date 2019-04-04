var gulp = require('gulp'),
    devBuild = (process.env.NODE_ENV !== 'production'),
    folder = {
        src: 'src/',
        build: 'build/'
    },
    jshint = require('gulp-jshint');


gulp.task('assets:js', function () {
    return gulp.src('./src/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter('default'))
});

gulp.task('watch', function () {
    gulp.watch('./index.js', ['assets:js'])
});

gulp.task('default', [
    'watch'
]);
