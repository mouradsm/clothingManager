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
			};

			function getRoupasList() {
				var data = $firebaseObject(ref.child('itens'));
				
				return data;
			}
		}
	})();
