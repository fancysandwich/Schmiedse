'use strict';

angular.module('myApp.front-page', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/front-page', {
    templateUrl: 'front-page/front-page.template.html',
    controller: 'front-pageCtrl'
  });
}])

.controller('front-pageCtrl', [function() {

}]);