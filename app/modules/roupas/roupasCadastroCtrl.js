(function() {
	'use strict';

	/**
	* @ngdoc function
	* @name app.controller:roupasCtrl
	* @description
	* # roupasCtrl
	* Controller of the app
	*/

  	angular
		.module('roupas')
		.controller('RoupasCadastroCtrl', Roupas);

		Roupas.$inject = ['RoupasService'];

		/*
		* recommend
		* Using function declarations
		* and bindable members up top.
		*/

		function Roupas(RoupasService) {
			/*jshint validthis: true */
			var vm = this;

			vm.clientes = RoupasService.getClientesList();
						
		}
})();
