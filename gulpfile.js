const browserify = require('browserify');
const cssModules = require('css-modulesify');
const gulp = require('gulp');

gulp.task('default', () => {
  browserify({
    entries: './index.js',
    debug: true,
  })
    .plugin(cssModules, {
      output: './modules.css',
    })
    .bundle()
    .pipe(gulp.dest('./bundle.js'));
});
