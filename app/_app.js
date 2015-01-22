'use strict';

angular.module('YourApp', [
    'ui.router'
])
    .config(['$stateProvider', '$locationProvider', function ($stateProvider, $locationProvider) {

        $locationProvider.html5Mode(true);

        $stateProvider
            .state('dragon', {
                controller: 'YourAppCtrl',
                templateUrl: '/app/app.html',
                url: '/'
            });
    }]);