// Main viewmodel class
// define(['knockout-latest.debug'], function(ko) {    
// define(['node_modules/knockout/build/output/knockout-latest.debug.js',
define(['node_modules/knockout/build/output/knockout-latest.js',
// 'appViewModel', 
// 'domReady!'
], 
function(
    ko,
    // appViewModel
                    ) {
        return function appViewModel() {
            this.firstName = ko.observable('Bert');
            this.firstNameCaps = ko.pureComputed(function() {
                return this.firstName().toUpperCase();
            }, this);

        ko.applyBindings(new appViewModel());

        };
});

// require(['knockout-x.y.z', 'appViewModel', 'domReady!'], function(ko, appViewModel) {
//             ko.applyBindings(new appViewModel());        
// });