'use strict';

/**
 * @ngdoc function
 * @name app.route:extratoRoute
 * @description
 * # extratoRoute
 * Route of the app
 */

angular.module('extrato')
	.config(['$stateProvider', function ($stateProvider) {
		
		$stateProvider
			.state('home.extrato', {
				url:'/extrato',
				templateUrl: 'app/modules/extrato/extrato.html',
				controller: 'ExtratoCtrl',
				controllerAs: 'vm'
			});

		
	}]);
