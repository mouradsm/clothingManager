(function() {
	'use strict';

	/**
	 * @ngdoc function
	 * @name app.service:menuService
	 * @description
	 * # menuService
	 * Service of the app
	 */

  	angular
		.module('clothingmanager')
		.factory('MenuService', Menu);
		// Inject your dependencies as .$inject = ['$http', 'someSevide'];
		// function Name ($http, someSevide) {...}

		Menu.$inject = ['$http'];

		function Menu ($http) {

			var menu = [
				
					{
						link: 'roupas',
							name: 'Roupas',
					},
					{
						link: 'roupas-vendidas',
							name: 'Roupas vendidas'
					},
					{
						link: 'roupas-cadastro',
							name: 'Cadastro de Roupas'
					}
			    
		  	];

			return {
				listMenu: function () {
					return menu;
				}
		  	}

		}

})();
