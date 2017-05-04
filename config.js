

app.config(function($routeProvider){


  $routeProvider.when("/form", {
    templateUrl: "form.html"
  })
    .when("/story", {
      templateUrl: "story.html"
  });


});
