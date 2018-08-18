    ///<reference path="./node_modules/knockout/build/output/knockout-latest.debug.js" />

    var viewModel = {
        fname: ko.observable('David'),
        flight_number: ko.observable(123),
        formatFlightNumber: function(flight){
            return "UA " + flight()
        }
    }
    ko.applyBindings(viewModel)