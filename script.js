
var app = angular.module('madlibApp',['ngRoute']);

app.controller('controller1', function($scope, madFactory){

  $scope.obj = {};

  $scope.submit = function(){

      madFactory.sendWords($scope.obj);
      // console.log($scope.obj);
      // console.log('click');

  };

});
