const { join } = require('path');
const gulp = require('gulp');
const plugins = require('gulp-load-plugins')();

const buildJs = require('./buildJs');

// clear lib
gulp.task('clear', () => {
	return gulp.src(`${join('..', 'lib')}`,
		{
			allowEmpty: true,
			base: process.cwd()
		}
	)
		.pipe(plugins.clean({
			force: true
		}));
});

const source = [
	`${join('..', 'src/web/**/*.js')}`,
	`${join('..', 'src/web/**/*.jsx')}`,
	`!${join('..', 'src/web/**/__test__/**')}`,
	`!${join('..', 'src/web/**/examples/**')}`
];

// build main js
buildJs('main', join('..', 'src', 'main.js'), join('..', 'lib'));

// build component js
buildJs('component', source, join('..', 'lib', 'web'));

// build less
const lessSource = [
	`${join('..', 'src/web/**/*.less')}`,
	`!${join('..', 'src/web/**/examples/**')}`
];
gulp.task('less', () => {
	return gulp.src(lessSource, { allowEmpty: true })
		.pipe(gulp.dest(`${join('..', 'lib', 'web')}`));
});



// gulp 默认任务
gulp.task('default',
	gulp.series('clear', 'main', 'component', 'less')
);