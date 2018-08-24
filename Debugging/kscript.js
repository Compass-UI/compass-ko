    ///<reference path="./node_modules/knockout/build/output/knockout-latest.debug.js" />

    debugger;
    var viewModel = {
        fname: ko.observable('David'),
        flight_number: ko.observable(123),
        formatFlightNumber: function(flight){
            return "UA " + flight()
        },
        show: ko.observable(true),
        displayMessage: ko.observable(false),

        showHide: function(){
            if(this.show()){
                this.show(false)
            }else{
                this.show(true)
            }
        }
    }
    ko.applyBindings(viewModel)