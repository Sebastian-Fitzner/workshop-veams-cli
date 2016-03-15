import Navigation from './modules/navigation/navigation';

// @INSERTPOINT :: @ref: js-import


$(document).ready(function () {


	/**
	 * Init Navigation
	 */
	Helpers.loadModule({
		domName: 'navigation',
		module: Navigation,
		context: context
	});

// @INSERTPOINT :: @ref: js-init-v3

});