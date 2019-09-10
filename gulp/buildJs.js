const gulp = require('gulp');
const babel = require('gulp-babel');
const uglify = require('gulp-uglify');
const gutil = require('gulp-util');

module.exports = function(name, input, output) {
	return gulp.task(name, () => {
		return gulp.src(input, {})
			.pipe(babel({
				"presets": [
					["@babel/preset-env"],
					"@babel/preset-react"
				],
				"plugins": [
					[
						"@babel/plugin-proposal-decorators",
						{
							"legacy": true
						}
					],
					[
						"@babel/plugin-proposal-class-properties",
						{
							"loose": true
						}
					]
				]
			}))
			.on('error', (err) => {
				gutil.log(gutil.colors.red('[Error]'), err.toString());
			})
			// .pipe(uglify())
			.on('error', (err) => {
				gutil.log(gutil.colors.red('[Error]'), err.toString());
			})
			.pipe(gulp.dest(output));
	});  
};