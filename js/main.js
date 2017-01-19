var app = angular.module('main', ['ngRoute']);

app.config(function($routeProvider){
  $routeProvider.when('/', {
    controller: 'index',
    templateUrl: 'views/home.html'
  })
  .when('/register', {
    controller: 'register',
    templateUrl: 'views/register.html'
  })
    .when('/login', {
    controller: 'login',
    templateUrl: 'views/login.html'
  })
});


   app.controller("side", ["$scope", function ($scope) {
        $scope.buttons = [ { id: 0, label : "Logout", link:"", isVisible: false},
                			{ id: 1, label : "Sign In", link:"login", isVisible: true},
        				   { id: 2, label: "Browse", link:"browse", isVisible: true},
        				   { id: 3, label: "Profile", link:"profile", isVisible: false},
        				   { id: 4, label: "Forum", link:"forum", isVisible: true},
        				   { id: 5, label: "About", link:"about", isVisible: true}
        				];
        
    }]);

	app.controller("index", ["$scope", function ($scope) {
        $scope.title = "BetterCupid";
    }])
    app.controller("register", ["$scope", function ($scope) {
        $scope.title = "Register";
        $scope.name ="Name here"; 
    }]);
   app.controller("login", ["$scope", function ($scope) {
        $scope.title = "Login";
        $scope.username ="Name here"; 
        
    }]);
