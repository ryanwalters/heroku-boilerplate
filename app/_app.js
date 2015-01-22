'use strict';

angular.module('Dragon', [
    'ui.router'
])
    .config(['$stateProvider', '$locationProvider', function ($stateProvider, $locationProvider) {

        $locationProvider.html5Mode(true);

        $stateProvider
            .state('dragon', {
                controller: 'DragonCtrl',
                templateUrl: '/app/app.html',
                url: '/'
            });
    }]);