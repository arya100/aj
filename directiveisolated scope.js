var app = angular.module ('app',[]);
app.controller('sample',['$scope',function(@scope){
        $scope.a= 10;
        $scope.b= 20;
    
        $scope.p= 11;
        $scope.q= 22;
        $scope.x= 33;
            
    
}]);
app.directive('message',function(){
    return{
        templateUrl:'html',
        scope:{
            //variables must be match with the templateurl
           /* @ wroks with strings
            = works with the Object
            & works with functions */
            a:'@',
            b:'@'
        }
    }
});
app.directive('message',function(){
    return{
        templateUrl:'html',
        //isolated scope
        scope:{
            //variables must be match with the templateurl
           /* @ wroks with strings
            = works with the Object
            & works with functions */
            x:'@m',
            y:'@n'
            //if we pass {{A}}{{b}} in place of m&n in html on place of directive  then will acess the scope of a and b
        },
        controller: function($scope,$element,$attrs){
            //when ever you are acessing  the scope means isolated scope and you create some more scope varables hear also
            $scope.doProcess =function(){
                var r = praseInt($scope.x) + parseInt($scope.y);
                alert("Sum=" + r);
            }
            
        }
    }
});