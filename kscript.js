    ///<reference path="node_modules/angular/angular.js" />

    vm2 = {
        flight_number: ko.observable(123),
        formatFlightNumber: function(flight){
            return "UA " + flight()
        }

    }