'use strict';

var gulp = require('gulp'),
    watch = require('gulp-watch'),
    rigger = require('gulp-rigger');

var path = {
    build: {

        js: 'controllers/build/',

    },
    src: {
        js: 'controllers/controller.js',

    },
    watch: {
        js: 'controllers/controller/**/*.js',
    }
};

gulp.task('js:build', function () {
    gulp.src(path.src.js)
        .pipe(rigger())
        .pipe(gulp.dest(path.build.js))
});

gulp.task('build', [
    'js:build',
]);

gulp.task('watch', function(){
    watch([path.watch.js], function(event, cb) {
        gulp.start('js:build');
    });
});


gulp.task('default', ['build','watch']);