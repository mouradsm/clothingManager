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
			var data = [
				{'id': '00001','valor': '30.50', 'descricao': 'Blusinha rosa'},
				{'id': '00002','valor': '60.50', 'descricao': 'Blusinha preta'},
				{'id': '00003','valor': '10.50', 'descricao': 'Blusinha branca'},
				{'id': '00004','valor': '20.50', 'descricao': 'Blusinha azul'}
			];
						
			return {
				getRoupasList: getRoupasList
			};

			function getRoupasList() {
				return data;
			}

		}
})();
