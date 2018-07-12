var app = angular.module('genesisApp').controller('homeCtrl',function($scope,$state){
    $scope.gotoHome = function(){
        $state.go('home');
    };
    $scope.gotoDashboard = function(){
        $state.go('home.dashboard');
    };
    $scope.gotoProfile = function(){
        $state.go('home.profile');
    };
    $scope.logout = function(){
        $state.go('login');
    };
    $scope.user= localStorage.username;
    $scope.open = false;
    $scope.myFun = function(){
        if($scope.open){
            $scope.open = false;
        }
        else{
            $scope.open = true;
        }
        return $scope.open;
    }
});
app.filter('myfilter',function()
{
    return function(data)
    {
        var name=data.split('')[0];
        return name;
    }
}
);