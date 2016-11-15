var gulp 			= require('gulp'),
	less 		  	= require('gulp-less'),
	browserSync     = require('browser-sync');
	concat          = require('gulp-concat');
  	uglify          = require('gulp-uglifyjs');
    autoprefixer    = require('gulp-autoprefixer');

gulp.task('less',function() {
	return gulp.src('app/less/*.less')
		.pipe(less())
		.pipe(autoprefixer([
            'Android 2.3',
            'Android >= 4',
            'Chrome >= 20',
            'Firefox >= 24',
            'Explorer >= 8',
            'iOS >= 6',
            'Opera >= 12',
            'Safari >= 6'
        ]))
		.pipe(gulp.dest('app/css'))
		.pipe(browserSync.reload({stream: true}))
});


gulp.task('scripts',function() {
	return gulp.src([
		'app/libs/jquery-3.1.1.min.js',
		'app/libs/swiper.jquery.js',
		'app/libs/jquery.slicknav.min.js',
		'app/libs/jquery.bpopup.js'
		])
		.pipe(concat('libs.min.js'))
		.pipe(uglify())
		.pipe(gulp.dest('app/js'))
});

gulp.task('browser-sync', function() {
	browserSync({
		server: {
			baseDir: 'app',
		},
		notify: false
	});
});

gulp.task('watch',['browser-sync', 'less'], function(){
	gulp.watch('app/less/*.less', ['less']);
	gulp.watch('app/*.html', browserSync.reload);
	gulp.watch('app/**/*.js', browserSync.reload);
});




