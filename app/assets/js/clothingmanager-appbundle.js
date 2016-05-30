/*!
* clothingmanager - v0.0.1 - MIT LICENSE 2016-05-30. 
* @author Angmodular
*/
(function() {
	'use strict';

	/**
	 * @ngdoc index
	 * @name app
	 * @description
	 * # app
	 *
	 * Main modules of the application.
	 */

	angular.module('clothingmanager', [
		'ngResource',
		'ngAria',
		'ngMaterial',
		'ngMdIcons',
		'ngCookies',
		'ngAnimate',
		'ngSanitize',
		'ui.router',
		'firebase',
		'home',
		'roupas',
		'clientes',
	]);

})();

(function () {
	'use strict';

	/**
	* @ngdoc configuration file
	* @name app.config:config
	* @description
	* # Config and run block
	* Configutation of the app
	*/


	angular
		.module('clothingmanager')
		.config(configure)
		.run(runBlock);

	configure.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider', '$httpProvider'];

	function configure($stateProvider, $urlRouterProvider, $locationProvider, $httpProvider) {

		$locationProvider.hashPrefix('!');

		// This is required for Browser Sync to work poperly
		$httpProvider.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

		
			$urlRouterProvider
			.otherwise('/dashboard');
			
			}

			runBlock.$inject = ['$rootScope'];

			function runBlock($rootScope) {
				'use strict';

				console.log('AngularJS run() function...');
			}


		})();

(function () {
	'use strict';

	/**
	 * @ngdoc function
	 * @name app.module:clientesModule
	 * @description
	 * # clientesModule
	 * Module of the app
	 */

  	angular.module('clientes', []);

})();

(function () {
	'use strict';

	/**
	 * @ngdoc function
	 * @name app.module:extratoModule
	 * @description
	 * # extratoModule
	 * Module of the app
	 */

  	angular.module('extrato', []);

})();

(function() {
	'use strict';

	/**
	* @ngdoc function
	* @name app.module:homeModule
	* @description
	* # homeModule
	* Module of the app
	*/

	angular.module('home', []);
})();

(function () {
	'use strict';

	/**
	 * @ngdoc function
	 * @name app.module:roupasModule
	 * @description
	 * # roupasModule
	 * Module of the app
	 */

  	angular.module('roupas', []);

})();

'use strict';

/**
 * @ngdoc function
 * @name app.route:clientesRoute
 * @description
 * # clientesRoute
 * Route of the app
 */

angular.module('clientes')
	.config(['$stateProvider', function ($stateProvider) {
		
		$stateProvider
			.state('home.clientes', {
				url:'/clientes',
				templateUrl: 'app/modules/clientes/clientes.html',
				controller: 'ClientesCtrl',
				controllerAs: 'vm'
			});

		
	}]);

'use strict';

/**
 * @ngdoc function
 * @name app.route:extratoRoute
 * @description
 * # extratoRoute
 * Route of the app
 */

angular.module('extrato')
	.config(['$stateProvider', function ($stateProvider) {
		
		$stateProvider
			.state('home.extrato', {
				url:'/extrato',
				templateUrl: 'app/modules/extrato/extrato.html',
				controller: 'ExtratoCtrl',
				controllerAs: 'vm'
			});

		
	}]);

'use strict';

	/**
	* @ngdoc function
	* @name app.route:HomeRoute
	* @description
	* # HomeRoute
	* Route of the app
	*/

angular.module('clothingmanager')
	.config(['$stateProvider', function ($stateProvider) {
		$stateProvider
			
			.state('home', {
				url: '',
				abstract: true,
				templateUrl: 'app/modules/home/home.html',
				controller: 'HomeCtrl',
				controllerAs: 'vm'
			})
			.state('home.dashboard', {
				url:'/dashboard',
				templateUrl: 'app/modules/home/dashboard.html'
			});
			
	}]);

'use strict';

/**
 * @ngdoc function
 * @name app.route:roupasRoute
 * @description
 * # roupasRoute
 * Route of the app
 */

angular.module('roupas')
	.config(['$stateProvider', function ($stateProvider) {
		
		$stateProvider
			.state('home.roupas', {
				url:'/roupas',
				templateUrl: 'app/modules/roupas/roupas.html',
				controller: 'RoupasCtrl',
				controllerAs: 'vm'
			}).state('home.roupas-vendidas', {
				url:'/roupas',
				templateUrl: 'app/modules/roupas/roupas-vendidas.html',
				controller: 'RoupasVendidasCtrl',
				controllerAs: 'vm'
			}).state('home.roupas-cadastro', {
				url:'/roupas',
				templateUrl: 'app/modules/roupas/roupas-cadastro.html',
				controller: 'RoupasCadastroCtrl',
				controllerAs: 'vm'
			});

		
	}]);

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

		Extrato.$inject = [];

		/*
		* recommend
		* Using function declarations
		* and bindable members up top.
		*/

		function Extrato() {
			/*jshint validthis: true */
			var vm = this;

		}

})();

(function () {
	'use strict';

	/**
	* @ngdoc function
	* @name app.controller:HomeCtrl
	* @description
	* # HomeCtrl
	* Controller of the app
	*/

	angular
		.module('clothingmanager')
		.controller('HomeCtrl', Home);

	Home.$inject = ['homeService'];

	/*
	* recommend
	* Using function declarations
	* and bindable members up top.
	*/

	function Home(homeService) {
		/*jshint validthis: true */
		var vm = this;
		vm.title = "Hello, clothingmanager!";
		vm.version = "1.0.0";
		vm.listFeatures = homeService.getFeaturesList();

	}

})();

(function () {
	'use strict';

	/**
	* @ngdoc function
	* @name app.controller:LayoutCtrl
	* @description
	* # LayoutCtrl
	* Controller of the app
	*/

	angular
		.module('clothingmanager')
		.controller('LayoutCtrl', Layout);

	Layout.$inject = ['$mdSidenav', '$cookies', '$state', '$mdToast', '$mdDialog'];

	/*
	* recommend
	* Using function declarations
	* and bindable members up top.
	*/

	function Layout($mdSidenav, $cookies, $state, $mdToast, $mdDialog ) {
		/*jshint validthis: true */
		var vm = this;

		vm.toggleSidenav = function (menuId) {
			$mdSidenav(menuId).toggle();
		};

		vm.changePassword = function () {
			$mdToast.show(
				$mdToast.simple()
				.content('Password clicked!')
				.position('top right')
				.hideDelay(2000)
			);
		};

		vm.changeProfile = function (ev) {
			$mdDialog.show({
				controller: DialogController,
				templateUrl: 'tabDialog.tmpl.html',
				parent: angular.element(document.body),
				targetEvent: ev,
				clickOutsideToClose:true
			})
			.then(function(answer) {
				$mdToast.show(
					$mdToast.simple()
					.content('You said the information was "' + answer + '".')
					.position('top right')
					.hideDelay(2000)
				);

			}, function() {
				$mdToast.show(
					$mdToast.simple()
					.content('You cancelled the dialog.')
					.position('top right')
					.hideDelay(2000)
				);
			});

			function DialogController($scope, $mdDialog) {
				$scope.hide = function() {
					$mdDialog.hide();
				};

				$scope.cancel = function() {
					$mdDialog.cancel();
				};

				$scope.answer = function(answer) {
					$mdDialog.hide(answer);
				};
			}
		};


		vm.logOut = function () {

			alert('Implement your Function Here');
			// $cookies.put('dev_appserver_login', ' ');
			//$state.go('out', {}, {reload: true});

		};

		var originatorEv;
		vm.openMenu = function ($mdOpenMenu, ev) {
			originatorEv = ev;
			$mdOpenMenu(ev);
		};

	}

})();

(function () {
	'use strict';

	/**
	* @ngdoc function
	* @name app.controller:SidenavCtrl
	* @description
	* # SidenavCtrl
	* Controller of the app
	*/
	angular
		.module('clothingmanager')
		.controller('SidenavCtrl', SidenavCtrl)
		.controller('SettingsCtrl', SettingsCtrl);

	// Injecting Denpendencies

	SidenavCtrl.$inject = ['$mdSidenav', '$state', '$mdBottomSheet', '$mdToast', 'MenuService', '$scope'];
	SettingsCtrl.$inject = ['$mdBottomSheet'];

	/*
	* recommend
	* Using function declarations
	* and bindable members up top.
	*/

	function SidenavCtrl($mdSidenav, $state, $mdBottomSheet, $mdToast, MenuService, $scope) {
		/*jshint validthis: true */
		var vm = this;

		vm.toggleSidenav = function (menuId) {
			$mdSidenav(menuId).toggle();
		};

		vm.closeSidenav = function() {
			$mdSidenav('left').close();
		};

		// Close menu on small screen after click on menu item.
		// Only use $scope in controllerAs when necessary; for example, publishing and subscribing events using $emit, $broadcast, $on or $watch.
		$scope.$on('$stateChangeSuccess', vm.closeSidenav);

		vm.menu = MenuService.listMenu();

		vm.admin = [
			{
				link: 'showListBottomSheet($event)',
				title: 'Settings',
				icon: 'settings'
			}
		];

		vm.navigateTo = function (target) {

			var page = target;

			$state.go(page);

		};

		vm.showSettingsBottom = function ($event) {
			vm.alert = '';
			$mdBottomSheet.show({
				template: '<md-bottom-sheet class="md-grid" layout="column" ng-cloak><div layout="row" layout-align="center center"><h4>With clickOutsideToClose option, drag down or press ESC to close</h4></div><md-list flex layout="row" layout-align="center center"><md-list-item ng-repeat="item in vm.items"><md-button class="md-grid-item-content" ng-click="vm.listItemClick($index)"><md-icon class="md-48">{{item.icon}}</md-icon><div class="md-grid-text"> {{ item.name }} </div></md-button></md-list-item></md-list></md-bottom-sheet>',
				controller: 'SettingsCtrl',
				controllerAs: 'vm',
				targetEvent: $event
			}).then(function (clickedItem) {
				$mdToast.show(
					$mdToast.simple()
					.content(clickedItem.name + ' clicked!')
					.position('top right')
					.hideDelay(2000)
				);
			});
		};

	}

	function SettingsCtrl($mdBottomSheet) {
		/*jshint validthis: true */
		var vm = this;

		vm.items = [
			{name: 'Roles', icon: 'assignment_ind'},
			{name: 'Notes', icon: 'speaker_notes'},
			{name: 'Tasks', icon: 'view_list'},
			{name: 'Inbox', icon: 'inbox'}
		];

		vm.listItemClick = function ($index) {
			var clickedItem = vm.items[$index];
			$mdBottomSheet.hide(clickedItem);
		};
	}

})();

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

			vm.cadastrar = (function(){
				RoupasService.cadastrarRoupa(vm.select,vm.desc,vm.valor);
				vm.select = undefined;
				vm.desc = undefined;
				vm.valor = undefined;
			});
		}
})();

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
		.controller('RoupasVendidasCtrl', Roupas);

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

			vm.Devolver = (function(){
				RoupasService.devolverRoupa(vm.selectedItens);
				vm.selectedItens = [];
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

(function() {
	'use strict';

	/**
	 * @ngdoc function
	 * @name app.service:clientesService
	 * @description
	 * # clientesService
	 * Service of the app
	 */

  	angular
		.module('clientes')
		.factory('ClientesService', Clientes);
		// Inject your dependencies as .$inject = ['$http', 'someSevide'];
		// function Name ($http, someSevide) {...}

		Clientes.$inject = ['$http','$firebaseArray', '$firebaseObject'];

		function Clientes ($http, $firebaseArray, $firebaseObject) {
			var ref = new Firebase("https://burning-fire-7475.firebaseio.com/");

			return {
				cadastrarCliente: cadastrarCliente,
			}
			
			function cadastrarCliente(id, nome) {
				var clienteRef = ref.child('clientes');
				
				clienteRef.child(id).set({
					'id': id,
					'nome': nome
				});			
			}
		}

})();

(function() {
	'use strict';

	/**
	 * @ngdoc function
	 * @name app.service:extratoService
	 * @description
	 * # extratoService
	 * Service of the app
	 */

  	angular
		.module('extrato')
		.factory('ExtratoService', Extrato);
		// Inject your dependencies as .$inject = ['$http', 'someSevide'];
		// function Name ($http, someSevide) {...}

		Extrato.$inject = ['$http','$firebaseArray','$firebaseObject'];

		function Extrato ($http,$firebaseArray, $firebaseObject) {
			var ref = new Firebase("https://burning-fire-7475.firebaseio.com/");

			return {
				getExtrato: getExtrato,
			}

			function getExtrato () {

			}
		}

})();

(function () {
	'use strict';

	/**
	* @ngdoc function
	* @name app.service:homeService
	* @description
	* # homeService
	* Service of the app
	*/

	angular.module('clothingmanager')
		.factory('homeService', homeService);

	homeService.$inject = ['$http'];

	function homeService($http) {

		var list = [
			{"feature": "Implemented Best Practices, following: John Papa's Guide"},
			{"feature": "Using Controller AS syntax"},
			{"feature": "Wrap Angular components in an Immediately Invoked Function Expression (IIFE)"},
			{"feature": "Declare modules without a variable using the setter syntax"},
			{"feature": "Using named functions"},
			{"feature": "Including Unit test with Karma"},
			{"feature": "Including UI options for Bootstrap or Angular-Material"},
			{"feature": "Including Angular-Material-Icons for Angular-Material UI"},
			{"feature": "Dynamic Menu generator for both themes"},
			{"feature": "Grunt task for Production and Development"}
		];

		return {
			getFeaturesList: getFeaturesList
		};

		function getFeaturesList() {
			return list;
		}

	}

})();

(function() {
	'use strict';

	/**
	 * @ngdoc function
	 * @name app.service:menuService
	 * @description
	 * # menuService
	 * Service of the app
	 */

  	angular
		.module('clothingmanager')
		.factory('MenuService', Menu);
		// Inject your dependencies as .$inject = ['$http', 'someSevide'];
		// function Name ($http, someSevide) {...}

		Menu.$inject = ['$http'];

		function Menu ($http) {

			var menu = [
				
					{
						link: 'roupas',
							name: 'Roupas'
					},
			    
					{
						link: 'clientes',
							name: 'Clientes'
					},
			    
		  	];

			return {
				listMenu: function () {
					return menu;
				}
		  	}

		}

})();

(function() {
	'use strict';

	/**
	 * @ngdoc function
	 * @name app.service:menuService
	 * @description
	 * # menuService
	 * Service of the app
	 */

  	angular
		.module('clothingmanager')
		.factory('MenuService', Menu);
		// Inject your dependencies as .$inject = ['$http', 'someSevide'];
		// function Name ($http, someSevide) {...}

		Menu.$inject = ['$http'];

		function Menu ($http) {

			var menu = [
				
					{
						link: 'roupas',
							name: 'Roupas'
					},
					{
						link: 'roupas-vendidas',
							name:'Roupas Vendidas'
					},
					{
						link: 'roupas-cadastro',
							name:'Cadastro Roupas'
					},
					{
						link: 'clientes',
							name: 'Clientes'
					}			    
		  	];

			return {
				listMenu: function () {
					return menu;
				}
		  	}

		}

})();

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
				getClientesList: getClientesList,
				venderRoupa: venderRoupa,
				devolverRoupa: devolverRoupa,
				getClienteByItemId: getClienteByItemId,
				cadastrarRoupa: cadastrarRoupa,
				cadastrarCliente: cadastrarCliente
			};

			function getRoupasList() {
				var data = $firebaseArray(ref.child('itens'));
				console.log(data);
				return data;
			}

			function getClientesList() {
				var data = $firebaseArray(ref.child('clientes'));

				return data;
			}

 			function getClienteByItemId(id) {
				var cliente;
				ref.child('itens/'+(id-1)).on('value', function(itemSnap){
					ref.child('clientes').child(itemSnap.child('cliente_id').val()).on('value', function(snap){
						cliente = snap.child('nome').val();
					});			
				});				

				return cliente;
			}

			//TODO: REFATORAR PARA UMA FUNÇÃO SÓ
			function venderRoupa(itens) {
				itens.forEach(function(item){
					//TODO: REFACTOR NESSA COISA HORRÍVEL
					ref.child('itens/' + item).update({
						"vendido": true
					}, function(err){
						if(err)
							return err;
					});
				});
			}

			function devolverRoupa(itens) {
				itens.forEach(function(item){
					//TODO: REFACTOR NESSA COISA HORRÍVEL
					ref.child('itens/'+ item).update({
						"vendido": false
					}, function(err){
						if(err)
							return err;
					});
				});
			}

			function cadastrarRoupa(cid, dsc, vl) {
				var itensRef = ref.child('itens')
				var itensArr = $firebaseArray(itensRef);
				var cliente_id 	= cid;
				var descricao 	= dsc;
				var valor		= vl;

				itensArr.$add({
					'cliente_id': cliente_id,
					'descricao': descricao,
					'valor': valor,
					'vendido': false
				}).then(function(itemRef){
					console.log('added: ' + itemRef.key());
				});
			}

			function cadastrarCliente(id, nome) {
				var clienteRef = ref.child('clientes');
				
				clienteRef.child(id).set({
					'id': id,
					'nome': nome
				});			
			}
		}
	})();
