const { src, dest, series, parallel, watch } = require('gulp');
const minifyJs = require('gulp-uglify');
const sourceMaps = require('gulp-sourcemaps');
const concat = require('gulp-concat');
const compileSass = require('gulp-sass')(require('sass'));
const minifyCss = require('gulp-clean-css');
const autoprefixer = require('gulp-autoprefixer');
// const imagemin = require('gulp-imagemin');
const browsersync = require('browser-sync').create();
const fileinclude = require('gulp-file-include');

const paths = {
    scripts: {
        src: './',
        dest: './dist'
    }
};

const includeHTML = () => {
    return src([
        '*.html',
        '!header.html',
        '!footer.html'
    ])
        .pipe(fileinclude({
            prefix: '@@',
            basepath: '@file'
        }))
        .pipe(dest(paths.scripts.dest));
}

//Js function

const jsFiles = ['src/js/**/script.js']
const bundleJs = () =>{
    return src(jsFiles)
        .pipe(sourceMaps.init())
        .pipe(minifyJs())
        .pipe(concat('bundle.js'))
        .pipe(sourceMaps.write())
        .pipe(dest('./dist/js'))
        .pipe(browsersync.stream());
}

//Sass function

const bundleSass = () => {
    return src('./src/sass/**/*.scss')
        .pipe(sourceMaps.init())
        .pipe(compileSass().on('error', compileSass.logError))
        .pipe(minifyCss())
        .pipe(concat('bundle.css'))
        .pipe(autoprefixer({
            cascade: false
        }))
        .pipe(sourceMaps.write())
        .pipe(dest('./dist/css'))
        .pipe(browsersync.stream());
}

// // Optimize images

// const img = () => {
//     return src('./src/img/*')
//         .pipe(imagemin([
//             imagemin.optipng({optimizationLevel: 5})
//         ]))
//         .pipe(dest('./dist/img'))
// }

//Watch files

const devWatch = () =>{
    watch('./*.html', includeHTML);
    watch('./src/sass/*', bundleSass);
    watch('./src/js/*', bundleJs);
    // watch('./src/img/*',img)
}

//BrowSync
const browserSync = () =>{
    browsersync.init({
        server: {
            baseDir: './'
        },
        port: 3000
    })
}

exports.watch = parallel(devWatch, browserSync);
exports.default = series(parallel(includeHTML, bundleJs, bundleSass), devWatch);