'use strict';

/**
 * @ngdoc function
 * @name app.route:roupasRoute
 * @description
 * # roupasRoute
 * Route of the app
 */

angular.module('roupas')
	.config(['$stateProvider', function ($stateProvider) {
		
		$stateProvider
			.state('home.roupas', {
				url:'/roupas',
				templateUrl: 'app/modules/roupas/roupas.html',
				controller: 'RoupasCtrl',
				controllerAs: 'vm'
			}).state('home.roupas-vendidas', {
				url:'/roupas',
				templateUrl: 'app/modules/roupas/roupas-vendidas.html',
				controller: 'RoupasCtrl',
				controllerAs: 'vm'
			});

		
	}]);
