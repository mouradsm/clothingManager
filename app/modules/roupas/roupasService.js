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
			};

			function getRoupasList() {
				var data = $firebaseArray(ref.child('itens'));
				
				return data;
			}

			function getClientesList() {
				var data = $firebaseArray(ref.child('clientes'));

				return data;
			}

			function venderRoupa(itens) {
				//console.log($firebaseObject(ref.child('clientes').child(id)));
				
				itens.forEach(function(){
					ref.child('itens').child(id).update({
						"vendido": false
					});
				});

			}
		}
	})();
