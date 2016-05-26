(function () {
	'use strict';

	/**
	 * @ngdoc function
	 * @name app.test:clientesTest
	 * @description
	 * # clientesTest
	 * Test of the app
	 */

	describe('clientes test', function () {
		var controller = null, $scope = null;

		beforeEach(function () {
			module('clothingmanager');
		});

		beforeEach(inject(function ($controller, $rootScope) {
			$scope = $rootScope.$new();
			controller = $controller('ClientesCtrl', {
				$scope: $scope
			});
		}));

		it('Should controller must be defined', function () {
			expect(controller).toBeDefined();
		});

	});
})();
