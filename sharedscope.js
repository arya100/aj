var app = angular.module("app", []);
app.controller('sample', function($scope) {
     $scope.a= 10;
        $scope.b= 20;
    
$scope.chagevalueB=function(){
    $scope.b = 30;
}
});

/*app.service("empService", function($http, $log) {
    this.findEmployeeById = function(empno, cb) {
        $http({
            url: 'ht'
            method: 'Get'
        }).then
        function(resp) {
            cb(resp.data);
        },
        function(resp) {
            $log.error('Error Occured')
        

    };
};
});*/

app.directive('masg',function(){
    return{
        templateUrl:'shared-info.html',
        controller:function($scope,$element,$attrs){ 
        $scope.chagevalueB = function(){
        $scope.b = 40;
    }
       
    }
    }
});

app.directive('masg2',function(){
    return{
        templateUrl:'shared-info.html',
        controller:function($scope,$element,$attrs){ 
        $scope.chagevalueB = function(){
        $scope.b = 50;
    }
       
    }
    }
});