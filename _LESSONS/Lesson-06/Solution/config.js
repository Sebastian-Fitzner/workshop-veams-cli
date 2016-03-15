var config = module.exports;

config.options = {
	paths: {
		// Veams config paths
		page: 'templates/pages',
		global: 'templates/partials/globals',
		block: 'templates/partials/blocks',
		component: 'templates/partials/components',
		utility: 'templates/partials/utilities',
		scss: 'sass',
		js: 'scripts',
		endpoints: [
			'templates/pages',
			'scripts/app.js',
			'sass/styles.scss'
		],
		blueprints: {
			style: 'blueprints/scss/styles.scss.ejs'
		}
	}
};