(function () {
	'use strict';

	/**
	 * @ngdoc function
	 * @name app.test:roupasTest
	 * @description
	 * # roupasTest
	 * Test of the app
	 */

	describe('roupas test', function () {
		var controller = null, $scope = null;

		beforeEach(function () {
			module('clothingmanager');
		});

		beforeEach(inject(function ($controller, $rootScope) {
			$scope = $rootScope.$new();
			controller = $controller('RoupasCtrl', {
				$scope: $scope
			});
		}));

		it('Should controller must be defined', function () {
			expect(controller).toBeDefined();
		});

	});
})();
