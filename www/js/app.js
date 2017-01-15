// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic'])


.controller('TodoCtrl', function($scope, $ionicPopup, $ionicListDelegate, $ionicModal, $timeout){
    $scope.tasks = 
      [
        {title: "Bluno", completed: false, nickname: "B"},
        {title: "Kevin Headphones", completed: false, nickname: "KH"},
        {title: "Rhasberry Pi", completed: false, nickname: "RP"}
      ];
    $scope.task = []  

    $scope.taskStatusChange = function(task) {
      
      if (task.completed == true) {
        $scope.task = task;
        $scope.openModal();
        console.log("Connect ", task);
        $scope.remove();
      } else {
        console.log("Disconnect", task);
      }
    }

    $scope.newTask = function() {
      $ionicPopup.prompt({
        title: "New Task",
        template: "Enter Task:",
        inputPlaceholder: "What do you need to do",
        okText: 'Create Task!'
      }).then(function(res){   //promise
        if (res) $scope.tasks.push({title: res, completed: false});
        })
    };

    $scope.edit = function(task) {
      $scope.data = {response: task.title};
      $ionicPopup.prompt({
        title: "Edit Task",
        scope: $scope
      }).then(function(res) {
          if (res!== undefined) task.title = $scope.data.response;
          $ionicListDelegate.closeOptionButtons(); 
      })
    };

    $ionicModal.fromTemplateUrl('my-modal.html', {
      scope: $scope,
      animation: 'slide-in-up'
    }).then(function(modal) {
      console.log('task', $scope.task);
      $scope.modal = modal;
    });

    $scope.openModal = function() {
      $scope.modal.show();
    };
    $scope.closeModal = function() {
      $scope.modal.hide();
    };
    // Cleanup the modal when we're done with it!
    $scope.$on('$destroy', function() {
      $scope.modal.remove();
    });
 
    $scope.nicknameBLE = function(task) {
      console.log('task in Modal',task)

      $scope.closeModal()
    }
  })

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})
