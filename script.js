angular.module('app', []);
angular.module('app').controller('mainCtrl', ['$scope', function($scope){
    $scope.user = {
        name: 'David Shams',
        address: {
            street: '234 Wacker',
            city: 'Chigago',
            state: 'IL',
            coutnry: 'USA',
            comments: 'Comments: <input data-bind="value: firstName">'


        }
    }
}])

angular.module('app').directive("koDirective", function(){
    return {
        template: 'Comments: <input data-bind="value: firstName">'
    }
})