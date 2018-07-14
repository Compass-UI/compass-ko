/// <reference path="node_modules/jquery/dist/jquery.js" />

$(function(){

        var vm = {
            qfirstName: ko.observable('John'),
            firstName: ko.observable('David'),
            price: ko.observable(1995),
            formatCurrency: function(value){
                return "$" + value().toFixed(2)
            }
        }
        ko.applyBindings(vm)
        

    
    // var viewModel = {
    //     qfirstName: ko.observable('John')
    // };
    // ko.applyBindings(viewModel)
})