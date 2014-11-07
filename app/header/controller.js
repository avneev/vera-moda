'use strict';

angular.module('myApp.header', [])
.controller('HeaderCtrl',  ['$scope', '$rootScope', 'xhrFactory', function($scope, $rootScope, xhrFactory) {
	
	xhrFactory.getList('nav-left.json').then(
		function(response) {
			$scope.navleft = response;
		},
		function(error) {
			console.log(error);
		}
	)
	xhrFactory.getList('nav-right.json').then(
		function(response) {
			$scope.navRight = response;
		},
		function(error) {
			console.log(error);
		}
	)
	$scope.fixedSubmenu = false;
	$scope.showSubMenu = function (item){
		item.subMenuVisible = true;
		$scope.fixedSubmenu = true;
	};
	$scope.hideSubMenu = function (item){
		item.subMenuVisible = false;
		$scope.fixedSubmenu = false;
	}

}]);