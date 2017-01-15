angular.module('Popup', ['ionic'])
.controller('PopupCtrl',function($scope, $ionicPopup, $timeout) {$scope.showPopup = function() {
  $scope.data = {};

  // An elaborate, custom popup
  var myPopup = $ionicPopup.show({
    template: '<input type="text" ng-model="data.nickname>',
    title: 'Add New Nickname{{$scope.task.nickname}}',
    scope: $scope,
    buttons: [
      { text: 'Cancel' },
      {
        text: '<b>Change</b>',
        type: 'button-positive',
        onTap: function(e) {
          if (!$scope.data.nickname) {
            console.log ("Dipshit -- you didn't enter a new nickname")
            //don't allow the user to close unless he enters wifi password
            // e.preventDefault();
          } else {
            console.log("New effing nickname: {{$scope.data.nickname}}")
            return $scope.data.nickname;
          }
        }
      }
    ]
  });

  myPopup.then(function(res) {
    console.log('Tapped!', res);
  });

  $timeout(function() {
     myPopup.close(); //close the popup after 3 seconds for some reason
  }, 3000);
 };


});