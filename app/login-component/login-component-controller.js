var app = angular.module('login').controller('loginCtrl',function($scope,$state){
    $scope.login = function(){
        localStorage.username=$scope.uname;
        localStorage.password=$scope.pass;
        $state.go('home');
    };
  });