const gulp = require('gulp'),
	  sass = require('gulp-sass'),
	  cssnano = require('gulp-cssnano'),
	  rename = require('gulp-rename'),
      autoprefixer = require('gulp-autoprefixer'),
	  concat = require('gulp-concat'),
	  uglify = require('gulp-uglifyjs'),
	  del = require('del'),
	  pngquant = require('imagemin-pngquant'),
	  imagemin = require('gulp-imagemin'),
	  build  = require('gulp-build'),
	  cache = require('gulp-cache');


gulp.task('sass', function(){
	return gulp.src('app/sass/**/*.sass')
    .pipe(sass())
    .pipe(autoprefixer({
            browsers: ['last 10 versions'],           
        }))
	.pipe(gulp.dest('app/css'))
});

gulp.task('scripts', function(){
	return gulp.src([
		'app/libs/jquery-1.11.0.min.js',
		'app/libs/wow.min.js',
		'app/libs/slick.min.js',
	])
	.pipe(concat('libs.min.js'))
	.pipe(uglify())
	.pipe(gulp.dest('app/js'));
});

gulp.task('css-libs', gulp.parallel('sass', function () {
	return gulp.src([
		'app/css/main.css',
		'app/css/libs.css',		
	])
    
	.pipe(cssnano())
	.pipe(rename({suffix: '.min'}))
	.pipe(gulp.dest('app/css'));
}));

 
gulp.task('img', function(){
	return gulp.src('app/img**/*')
	.pipe(cache(imagemin({
		interlaced: true,
		progressive: true,
		svgoPlugins: [{removeViewBox: false}],
		une: [pngquant()]
	})))
	.pipe(gulp.dest('dist'));
});

gulp.task('clean', function(){
	return del('dist');
});

gulp.task('clear', function(){
	return cache.clearAll();
});


gulp.task('watch', gulp.parallel('css-libs', 'scripts', function () {
	gulp.watch('app/sass/**/*.sass', gulp.parallel('sass'));
}));

gulp.task('build', gulp.parallel('clean', 'img', 'sass', 'scripts', function(cb){
	
	let buildCss = gulp.src([
		'app/css/main.min.css',
		'app/css/libs.min.css',
	])
	.pipe(gulp.dest('dist/css'));
	
	let buildJs = gulp.src('app/js/**.*')
	.pipe(gulp.dest('dist/js'));
	
	let buildHtml = gulp.src('app/*.html')
	.pipe(gulp.dest('dist'));
	
	cb()
}));


 
