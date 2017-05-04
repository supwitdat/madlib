var app = angular.module("madlibApp");

app.factory('madFactory', function(){

  var obj = {};
  var holder;

  obj.sendWords = function(words){
    holder = words;
    console.log('in sendwords');
    console.log(holder);
  }
  obj.getWords = function(){
    console.log('getting holder');
     return holder;

  }

  return obj;

});
