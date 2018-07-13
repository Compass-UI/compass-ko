angular.module('app', []);
angular.module('app').controller('mainCtrl', ['$scope', function($scope){
    $scope.user = {
        name: 'David Shams',
        address: {
            street: '234 Wacker',
            city: 'Chigago',
            state: 'IL',
            Coutnry: 'USA'

        }
    }
}])