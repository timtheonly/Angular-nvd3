/**
 * Created by Daniel on 01/06/2014.
 */


angular.module('Angular-nvd3-demo',['Angular-nvd3'])
    .controller('examples',['$scope',function($scope){
        $scope.data = [
            {
                values:[[1,1],[2,4]]
            }
        ]
    }]);