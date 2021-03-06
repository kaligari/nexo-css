let mix = require('laravel-mix');

mix.options({
	publicPath: '.',
	processCssUrls: false,
	terser: {
		extractComments: false,
	}
});

if (mix.inProduction()) {
	// build
	mix
	.sass('./nexo-css.sass', './build/nexo.min.css')
	.copy('./src/docs/index.html', './docs/index.html')
	.copy('./build/nexo.min.css', './docs/nexo.min.css')
	.js('./src/docs/main.js', './docs/docs.js')
} else {
	// watch
	mix
	.copy('./src/docs/index.html', './dist/index.html')
	.sass('./nexo-css.sass', './dist/nexo.min.css')
	.js('./src/docs/main.js', './dist/docs.js')
}