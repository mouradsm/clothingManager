(function() {
	'use strict';

	/**
	 * @ngdoc function
	 * @name app.service:extratoService
	 * @description
	 * # extratoService
	 * Service of the app
	 */

  	angular
		.module('extrato')
		.factory('ExtratoService', Extrato);
		// Inject your dependencies as .$inject = ['$http', 'someSevide'];
		// function Name ($http, someSevide) {...}

		Extrato.$inject = ['$http','$firebaseArray','$firebaseObject','RoupasService'];

		function Extrato ($http,$firebaseArray, $firebaseObject, RoupasService) {
			var ref = new Firebase("https://burning-fire-7475.firebaseio.com/");

			return {
				getExtrato: getExtrato,
				somaTotaisVendidosPorCliente: somaTotaisVendidosPorCliente
			}

			function getExtrato() {
				var clientes = RoupasService.getClientesList();
				var roupas 	 = RoupasService.getRoupasList();
				
			}

			function somaTotaisVendidosPorCliente(){
				var roupas 	 = RoupasService.getRoupasList();
				var clientes = RoupasService.getClientesList();
				var arrClientes = [];
				var total = 0;

				clientes.$loaded().then(function(item){
					item.forEach(function(element){
						arrClientes[element.id] = 0;
					});

					console.log(arrClientes);
				});

				/*roupas.$loaded().then(function(item){
					item.forEach( function(element, index) {
						if(element.vendido == true){
							total += parseInt(element.valor);
						}
					});
					console.log(total);
				});*/

				
			}

		}

})();
