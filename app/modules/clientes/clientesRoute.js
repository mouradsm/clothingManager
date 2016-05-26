'use strict';

/**
 * @ngdoc function
 * @name app.route:clientesRoute
 * @description
 * # clientesRoute
 * Route of the app
 */

angular.module('clientes')
	.config(['$stateProvider', function ($stateProvider) {
		
		$stateProvider
			.state('home.clientes', {
				url:'/clientes',
				templateUrl: 'app/modules/clientes/clientes.html',
				controller: 'ClientesCtrl',
				controllerAs: 'vm'
			});

		
	}]);
