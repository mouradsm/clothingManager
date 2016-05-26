(function() {
	'use strict';

	/**
	* @ngdoc function
	* @name app.controller:clientesCtrl
	* @description
	* # clientesCtrl
	* Controller of the app
	*/

  	angular
		.module('clientes')
		.controller('ClientesCtrl', Clientes);

		Clientes.$inject = ['ClientesService'];

		/*
		* recommend
		* Using function declarations
		* and bindable members up top.
		*/

		function Clientes(ClientesService) {
			/*jshint validthis: true */
			var vm = this;

			vm.cadastrar = (function(){
				ClientesService.cadastrarCliente(vm.id, vm.nome);
				vm.id = undefined;
				vm.nome = undefined;
			});
		}

})();
