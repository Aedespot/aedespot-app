angular.module('app.controllers', [])
  
.controller('listaCtrl', function($scope) {
	
})
   
.controller('adicionarCtrl', function($scope) {

})

.controller('ReportActivityCtrl', ['$scope', '$http',
    function ($scope, $http) {
        $scope.tipo = '';
        $scope.lat = '';
        $scope.long = '';

        $scope.reportActivity = function () {
            var reportData = {
                tipo: $scope.tipo,
                latitude: $scope.lat,
                longitude: $scope.long
            };

            $http.post('/reports/', reportData)
                .success(function(response) {
                    $scope.reportActivitySuccess = "Activity reported successfully";
                })
                .error(function (response) {
                    $scope.reportActivityFailure = "Could not report activity";
                });
        }
    }
]);
 
