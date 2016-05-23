(function() {
	'use strict';

	/**
	 * @ngdoc function
	 * @name app.service:roupasService
	 * @description
	 * # roupasService
	 * Service of the app
	 */

	 angular
	 .module('roupas')
	 .factory('RoupasService', Roupas);
		// Inject your dependencies as .$inject = ['$http', 'someSevide'];
		// function Name ($http, someSevide) {...}

		Roupas.$inject = ['$http','$firebaseArray', '$firebaseObject'];

		function Roupas ($http, $firebaseArray, $firebaseObject) {
			var ref = new Firebase("https://burning-fire-7475.firebaseio.com/");

			return {
				getRoupasList: getRoupasList,
				getClientesList: getClientesList,
				venderRoupa: venderRoupa,
				devolverRoupa: devolverRoupa,
			};

			function getRoupasList() {
				var data = $firebaseArray(ref.child('itens'));
				
				return data;
			}

			function getClientesList() {
				var data = $firebaseArray(ref.child('clientes'));

				return data;
			}


			//TODO: REFATORAR PARA UMA FUNÇÃO SÓ
			function venderRoupa(itens) {
				itens.forEach(function(item){
					//TODO: REFACTOR NESSA COISA HORRÍVEL
					ref.child('itens/'+(item-1)).update({
						"vendido": true
					}, function(err){
						if(err)
							return err;
					});
				});
			}

			function devolverRoupa(itens) {
				itens.forEach(function(item){
					//TODO: REFACTOR NESSA COISA HORRÍVEL
					ref.child('itens/'+(item-1)).update({
						"vendido": false
					}, function(err){
						if(err)
							return err;
					});
				});
			}
		}
	})();
