angular.module('starter')
  .controller('HomeCtrl', function ($scope, $ionicLoading, $ionicPlatform, $cordovaGeolocation, $timeout) {

    $scope.origin = '17.454253, 78.367132';

    $scope.startTrip = function () {
      var simPath = [
        '17.454253, 78.367132',
        '17.453591, 78.366820',
        '17.454064, 78.365317',
        '17.454473, 78.363840',
        '17.453612, 78.363802',
        '17.452467, 78.363711',
        '17.451045, 78.363732',
        '17.449745, 78.363958',
        '17.445586, 78.366170',
        '17.440982, 78.374548',
        '17.439788, 78.377291',
        '17.438085, 78.379359',
        '17.439119, 78.380400',
        '17.438566, 78.380958',
        '17.437860, 78.381816',
        '17.437880, 78.382170',
        '17.438034, 78.382625',
        $scope.origin
      ];

      function upgrade(count) {
        $timeout(function () {
          $scope.origin = simPath[count];

          if (count < simPath.length) {
            upgrade(++count);
          }
        }, 1000);
      }

      upgrade(0);
    };

    $ionicPlatform.ready(function () {
      $scope.$on('mapInitialized', function (event, map) {
        $scope.map = map;
      });

      var posOptions = {
        frequency: 1000,
        timeout: 10000,
        enableHighAccuracy: false
      };
      var watch = $cordovaGeolocation.watchPosition(posOptions);
      watch.then(
        null,
        function (err) {
          console.log(err);
        },
        function (position) {
          $scope.position = {
            lat: position.coords.latitude,
            lng: position.coords.longitude
          };
        });
    })
  })

  .controller('AppCtrl', function($scope) {
  })

  .controller('HelpDeskCtrl', function($scope) {
    $scope.playlists = [
      { title: 'Reggae', id: 1 },
      { title: 'Chill', id: 2 },
      { title: 'Dubstep', id: 3 },
      { title: 'Indie', id: 4 },
      { title: 'Rap', id: 5 },
      { title: 'Cowbell', id: 6 }
    ];
  })

  .controller('MyCabCtrl', function ($scope) {
    $scope.cabNumber = 'TS07 EA 0080';

    $scope.toggleAvail = function (passenger) {
      passenger.avail = !passenger.avail;
    };

    $scope.passengers = [
      {
        name: 'Soumyajit Banerjee',
        avail: true,
        editable: true
      },
      {
        name: 'Akhilesh Bangalore',
        avail: true,
        editable: false
      },
      {
        name: 'Abhijat Saxena',
        avail: true,
        editable: false
      },
      {
        name: 'Pranav Mittal',
        avail: false,
        editable: false
      },
      {
        name: 'Rakesh Kotha',
        avail: true,
        editable: false
      }
    ];
  });
