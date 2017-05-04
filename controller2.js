var app = angular.module('madlibApp');

app.controller('wordController2', function($scope, madFactory){


  // $scope.finalObj = madFactory.getWords();
  $scope.bringToStory = function(){
      $scope.finalObj = madFactory.getWords();
      console.log('getting words');
      console.log($scope.finalObj);
  };

  });
