(function() {
	'use strict';

	/**
	 * @ngdoc index
	 * @name app
	 * @description
	 * # app
	 *
	 * Main modules of the application.
	 */

	angular.module('clothingmanager', [
		'ngResource',
		'ngAria',
		'ngMaterial',
		'ngMdIcons',
		'ngCookies',
		'ngAnimate',
		'ngSanitize',
		'firebase',
		'ui.router',
		'home',
		'roupas',
	]);

})();
