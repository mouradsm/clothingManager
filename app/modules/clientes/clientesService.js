(function() {
	'use strict';

	/**
	 * @ngdoc function
	 * @name app.service:clientesService
	 * @description
	 * # clientesService
	 * Service of the app
	 */

  	angular
		.module('clientes')
		.factory('ClientesService', Clientes);
		// Inject your dependencies as .$inject = ['$http', 'someSevide'];
		// function Name ($http, someSevide) {...}

		Clientes.$inject = ['$http','$firebaseArray', '$firebaseObject'];

		function Clientes ($http, $firebaseArray, $firebaseObject) {
			var ref = new Firebase("https://burning-fire-7475.firebaseio.com/");

			return {
				cadastrarCliente: cadastrarCliente,
			}
			
			function cadastrarCliente(id, nome) {
				var clienteRef = ref.child('clientes');
				
				clienteRef.child(id).set({
					'id': id,
					'nome': nome
				});			
			}
		}

})();
