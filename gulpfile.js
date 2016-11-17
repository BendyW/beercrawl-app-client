var gulp = require('gulp');
var watch = require('gulp-watch');
var sass = require('gulp-sass');
var nodemon = require('gulp-nodemon');

gulp.task('Nodemon', restartServer);

function restartServer() {
    nodemon({
        script: './bin/www',
        ext: 'js hbs scss sql'
    });
}

gulp.task('compile-sass', function(){
    gulp.src('./public/styles/style.scss')
        .pipe(sass())
        .pipe(gulp.dest('./public/styles'))
});

gulp.task('sass-watch', function(){
    gulp.watch(['./public/styles/*.scss'], ['compile-sass']);
});

gulp.task('default', ['Nodemon', 'sass-watch']);