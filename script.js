///<reference path="node_modules/knockout/build/output/knockout-latest.js">

angular.module('app', []);
angular.module('app').controller('mainCtrl', ['$scope', function($scope){
    $scope.user = {
        name: 'David Shams',
        address: {
            street: '234 Wacker',
            city: 'Chigago',
            state: 'IL',
            coutnry: 'USA',
            comments: 'Comments: <input data-bind="value: firstName"><br/>Comments: <input data-bind="value: qfirstName">'


        }
    }
    // $scope.$apply();
}])

angular.module('app').directive("koDirective", function(){
    return {
        templateUrl: 'koTemplate.html'
    }
    $scope.$apply(); //AMD: must beused for it to work all the time
})