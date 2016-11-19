var gulp = require('gulp'),
    path = require('path'),
    concat = require('gulp-concat'),
    autoprefixer = require('gulp-autoprefixer'),
    ngAnnotate = require('gulp-ng-annotate'),
    uglify = require('gulp-uglify'),
    inject = require('gulp-inject'),
    minifyCSS = require('gulp-minify-css'),
    del = require('del'),
    rename = require('gulp-rename'),
    templateCache = require('gulp-angular-templatecache'),
    watch = require('gulp-watch'),
    fs = require('fs'),
    runSequence = require('run-sequence'),
    less = require('gulp-less-sourcemap');

var src = {
        js: {
            custom: [
                './app/**/*.module.js',
                './app/**/*.js'
            ]
            ,
            libs:[
                "./bower_components/angular/angular.js",
                "./bower_components/jquery/dist/jquery.js",
                "./bower_components/angular-route/angular-route.js",
                './bower_components/angular-mocks/angular-mocks.js',
                "./bower_components/angular-bootstrap/ui-bootstrap.js",
                "./bower_components/jquery-ui/jquery-ui.min.js",
                "./bower_components/angular-ui-router/release/angular-ui-router.min.js",
                "./bower_components/bootstrap/dist/js/bootstrap.min.js"
            ]
        },
        css: {
            custom: [
                './css/*.css'
            ],
            libs: [
                "./bower_components/bootstrap/dist/css/bootstrap.min.css"
            ]
        },
        img: {
            custom: [
                './img/*.png'
            ]
        },
        html: {
            main: './index.html',
            templates: './app/**/*.html'

        }
    },

    dest = './dest';

gulp.task('html', function () {
    function baseFn(file) {
        var path = file.relative.match(/\w+(.html)|\w+-\w+(.html)/g);
        return './' + path;
    }

    return gulp.src(src.html.templates)
        .pipe(templateCache('templates.js', {
            module: 'app',
            standalone: false,
            base: baseFn
        }))
        .pipe(gulp.dest(dest + '/js'));
});
gulp.task('css', function () {
    return gulp.src(src.css.custom.concat(src.css.libs))
        .pipe(less())
        .pipe(concat('style.css'))
        .pipe(minifyCSS())
        .pipe(gulp.dest(path.join(dest+'/css')));
});

gulp.task('img', function () {
    return gulp.src(src.img.custom)
        .pipe(gulp.dest(dest + '/img'));
});


gulp.task('vendor-js',function(){
    return gulp.src(src.js.libs)
        .pipe(uglify())
        .pipe(concat('vendor.js'))
        .pipe(gulp.dest(path.join(dest,'/js')));
});

gulp.task('js', function () {
    return gulp.src(src.js.custom)
        .pipe(ngAnnotate())
        .pipe(concat('/js/all.js'))
        .pipe(gulp.dest(dest));
});

// gulp.task('watch', ['default'], function () {
//     return gulp.watch(
//         [
//             './app/!**!/!*.js',
//             './app/!**!/!*.html',
//             './css/!*.less'
//         ],
//         ['default']);
// });

gulp.task('watch', ['default'], function () {
    return gulp.watch(
        [
            './app/**/*.js',
            './app/**/*.html',
            'index.html'
        ],
        ['default']);
});

gulp.task('clean', function (cb) {
    return del(['dest/*/*.js', '!dest/js/vendor.js', 'dest/css/*'],cb);
});


gulp.task('default', ['clean'], function () {
    var tasks = ['html', 'js', 'css', 'img'];
    try {
        fs.accessSync('dest/js/vendor.js');
    } catch (e) {
        tasks.push('vendor-js');
    }

    runSequence(tasks);
    
    //
    // var source = gulp.src(
    //     [].concat(['./dest/**/*.js'])
    //     .concat(['./dest/**/*.css']), {read: false}, {relative: true});
    //

    return gulp.src(src.html.main)
        // .pipe(inject(source))
        .pipe(gulp.dest(dest));
});