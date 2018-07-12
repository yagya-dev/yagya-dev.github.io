var app = angular.module('dashboard').controller('dashboardCtrl',function($scope,$state){
  
   $scope.open=false;
    $scope.list=[];
    $scope.addItem=function()
    { $scope.obj={};
        $scope.obj.Name=$scope.tName;
        $scope.obj.desc=$scope.tExperience;
        $scope.obj.checked=false;

        $scope.list.push($scope.obj);

    }
    $scope.delete=function($index)
    {
    $scope.list.splice($index,1);
    };
});
