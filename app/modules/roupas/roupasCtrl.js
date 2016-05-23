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
			vm.selectedItens = [];

			vm.clearValue = (function() {
				vm.search = undefined;
			});

			vm.Vender = (function(){
				RoupasService.venderRoupa(vm.selectedItens);
				vm.selectedItens = [];
			});

			vm.pega = (function(){
				 var a = RoupasService.getClienteByItemId('001');
				 return a;
			});

			vm.toggle = (function (item, list){
				var idx = list.indexOf(item);
				if(idx > -1) 
					list.splice(idx, 1);
				
				if(idx == -1)
					list.push(item);
			});

			vm.exists = (function (item, list) {
				return list.indexOf(item) > -1;
			});
		}
})();
