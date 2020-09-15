'use strict';

angular.module('myApp.frontPage', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/front-page', {
    templateUrl: 'front-page/front-page.template.html',
    controller: 'frontPageCtrl'
  });
}])

.controller('frontPageCtrl', [function() {
	//todo write controller
}]);