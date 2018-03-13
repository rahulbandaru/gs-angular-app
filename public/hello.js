angular.module('demo', [])
.controller('Hello', function($scope, $http) {
    $http.get('http://rest-service.guides.spring.io/greeting?name=Rahul').
        then(function(response) {
            $scope.greeting = response.data;
        });
});
