(function() {
	'use strict';

	/**
	* @ngdoc function
	* @name app.controller:extratoCtrl
	* @description
	* # extratoCtrl
	* Controller of the app
	*/

  	angular
		.module('extrato')
		.controller('ExtratoCtrl', Extrato);

		Extrato.$inject = ['ExtratoService','RoupasService'];

		/*
		* recommend
		* Using function declarations
		* and bindable members up top.
		*/

		function Extrato(ExtratoService, RoupasService) {
			/*jshint validthis: true */
			var vm = this;

			vm.clientes = RoupasService.getClientesList();
			vm.roupas = RoupasService.getRoupasList();

			(function(){
				ExtratoService.somaTotaisVendidosPorCliente()
			})();
		}

})();
