var app = angular.module("app", []);
app.controller('emp', function($scope, empService) {
    $scope.masg = "this is the message"

});

app.service("empService", function($http, $log) {
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
});

app.directive('emoDetails',function(){
    return{
        templateUrl:'emp-details.html'
    }
});