// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'

var ibmApp = angular.module('ibmApp', ['ionic'])
    //application config
    ibmApp.config(function ($stateProvider, $urlRouterProvider, $ionicConfigProvider) {
    // $urlRouterProvider - letting us specifsy the default route when loading the module  
        
    $urlRouterProvider.otherwise('/')
    $stateProvider
        .state('main', {
            url: '/main',
            templateUrl: 'partials/employee.html',
            controller: 'mainCtrl',
            resolve: {
                employees: function (EmployeeService) {
                    return EmployeeService.getEmployeeList();
                }
            }
        })
        
        .state('splash', {
            url: '/',
            /* default url */
            templateUrl: 'pages/splash.html',
            controller: 'splashCtrl'
        })
        
        .state('detail', {
            url: '/detail/:empId',
            templateUrl: 'partials/details.html',
            controller: 'employeeDetailCtrl',
            resolve: {
                employeeDetailList: function ($stateParams, EmployeeDetailsService) {
                    return EmployeeDetailsService.getEmployeeDetails($stateParams.empId);
                },
                empId: function ($stateParams) {
                    return $stateParams.empId;
                }
            }
        })
})

