'use strict';

angular.
  module('core.member').
  factory('Member', ['$resource',
    function($resource) {
      return $resource('members/:name.json', {}, {
        query: {
          method: 'GET',
          params: {name: 'names'},
          isArray: true
        }
      });
    }
  ]);
