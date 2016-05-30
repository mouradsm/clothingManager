(function () {
	'use strict';

	/**
	 * @ngdoc function
	 * @name app.test:extratoTest
	 * @description
	 * # extratoTest
	 * Test of the app
	 */

	describe('extrato test', function () {
		var controller = null, $scope = null;

		beforeEach(function () {
			module('clothingmanager');
		});

		beforeEach(inject(function ($controller, $rootScope) {
			$scope = $rootScope.$new();
			controller = $controller('ExtratoCtrl', {
				$scope: $scope
			});
		}));

		it('Should controller must be defined', function () {
			expect(controller).toBeDefined();
		});

	});
})();
