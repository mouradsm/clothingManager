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
		.controller('RoupasCtrl', Roupas);

		Roupas.$inject = ['RoupasService'];

		/*
		* recommend
		* Using function declarations
		* and bindable members up top.
		*/

		function Roupas(RoupasService) {
			/*jshint validthis: true */
			var vm = this;
			vm.roupas = RoupasService.getRoupasList();
			vm.clientes = RoupasService.getClientesList();
			// console.log(RoupasService.getRoupasList());

			vm.clearValue = (function() {
				vm.search = undefined;
			});

			vm.Vender = (function(){
				console.log('hello');
				RoupasService.venderRoupa('001');
			});
		}

})();
