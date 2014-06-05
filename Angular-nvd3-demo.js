/**
 * Created by Daniel on 01/06/2014.
 */


angular.module('Angular-nvd3-demo',['Angular-nvd3'])
    .controller('bar',['$scope',function($scope){
        $scope.data = [
            {
                values:[[1,2,3],[2,4,6]]
            }
        ];

        $scope.barX= function(){
            return function(d){return d[1]};
        };

        $scope.barY = function(){
            return function(d){return d[2]};
        };
    }]);