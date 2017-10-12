angular.module('starter', ['ionic', 'ngCordova', 'ngMap'])
  .run(function ($ionicPlatform, $rootScope, NgMap) {
    $ionicPlatform.ready(function () {
      if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
        cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
        cordova.plugins.Keyboard.disableScroll(true);
      }
      if (window.StatusBar) {
        StatusBar.styleDefault();
      }

      NgMap.getMap().then(function (map) {
        $rootScope.map = map;
      });
    });
  })

  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('app', {
        url: "/app",
        abstract: true,
        templateUrl: "templates/menu.html",
        controller: 'AppCtrl'
      })

      .state('app.home', {
        url: "/home",
        views: {
          'menuContent' :{
            templateUrl: "templates/home.html",
            controller: 'HomeCtrl'
          }
        }
      })

      .state('app.mycab', {
        url: "/mycab",
        views: {
          'menuContent' :{
            templateUrl: "templates/mycab.html",
            controller: 'MyCabCtrl'
          }
        }
      })
      .state('app.helpdesk', {
        url: "/helpdesk",
        views: {
          'menuContent' :{
            templateUrl: "templates/helpdesk.html",
            controller: 'HelpDeskCtrl'
          }
        }
      });
    $urlRouterProvider.otherwise('/app/home');
  });
