const gulp = require('gulp');
const sass = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');
const source = require('vinyl-source-stream');
const buffer = require('vinyl-buffer');
const browserify = require('browserify');
const watchify = require('watchify');
const babelify = require('babelify');
const exit = require('gulp-exit');
const del = require('del');
const gulpif = require('gulp-if');
const runSequence = require( 'run-sequence' );

function compile(watch) {
	var bundler = watchify(browserify('src/js/main.js', { debug: true })
		.transform(babelify, { presets: ['es2015'] }));

	function rebundle() {
		return bundler.bundle()
			.on('error', function(err) { console.error(err); this.emit('end'); })
			.pipe(source('main.js'))
			.pipe(buffer())
			.pipe(sourcemaps.init({ loadMaps: true }))
			.pipe(sourcemaps.write('./'))
			.pipe(gulp.dest('dist/js'))
			.pipe(gulpif(!watch, exit()));
	}

	if (watch) {
		bundler.on('update', function() {
			console.log('-> bundling...');
			rebundle();
		});
	}
	rebundle(watch);

}

function watch() {
	return compile(true);
}

gulp.task('js:watch', function () {
	return watch();
});

gulp.task('js:build', function () {
	compile();
});

gulp.task('sass', () => gulp
	.src('src/css/main.scss')
	.pipe(sass())
	.pipe(gulp.dest('dist/css')));

gulp.task('html', () => gulp
	.src('src/index.html')
	.pipe(gulp.dest('dist/')));

gulp.task('clean', () => {
	return del('dist', {
		force: true
	});
});

gulp.task('watch', () => {
	runSequence(
		'clean', [
			'sass',
			'js:watch',
			'html'
		],
		() => {
			gulp.watch('src/index.html', ['html']);
			gulp.watch('src/css/main.scss', ['sass']);
		}
	);
});

gulp.task('default', callback => {
	runSequence(
		'clean', [
			'sass',
			'js:build',
			'html'
		],
		callback
	);
});
