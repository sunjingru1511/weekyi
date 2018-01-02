var gulp = require('gulp');
var watch = require('gulp-watch');
var uglify = require('gulp-uglify');
var webserver = require('gulp-webserver');
var concat = require('gulp-concat');
var rename = require('gulp-rename');
var sass = require('gulp-sass');

gulp.task('webserver', function () {
    gulp.src('./')
         .pipe(webserver({
             host: 'localhost',
             port: 8800,
             open: true,
             fallback: 'index.html',
             livereload: true
         }))
})
gulp.task('watch', function () {  // 监听
    gulp.watch(['./index.html', 'data_format.js', 'style.css'],['yasuo'])
})
gulp.task('yasuo', function () { //压缩
    gulp.src('./data_format.js')
         .pipe(concat('./data.js'))
         .pipe(uglify())
         .pipe(rename('data_format.min.js'))
         .pipe(gulp.dest('./js/'))
})
gulp.task('sass', function () {
    gulp.src('./style.css')
         .pipe(sass())     
         .pipe(gulp.dest('./css/'))  
})
gulp.task('default', function () { 
    gulp.start('webserver', 'watch', 'sass')
})