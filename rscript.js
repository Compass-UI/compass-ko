/// <reference path="./node_modules/jquery/dist/jquery.js" />
requirejs.config({
    baseUrl: '/',
    paths: {
                // the left side is the module ID,
        // the right side is the path to
        // the jQuery file, relative to baseUrl.
        // Also, the path should NOT include
        // the '.js' file extension. This example
        // is using jQuery 1.9.0 located at
        // js/lib/jquery-1.9.0.js, relative to
        // the HTML page.
        jquery: './node_modules/jquery/dist/jquery',
        angular: './node_modules/angular/angular',
        knockout: './node_modules/knockout/build/output/knockout-latest',
        // knockout: './node_modules/knockout/build/output/knockout-latest.debug',
        // ko: './node_modules/knockout/build/output/knockout-latest.debug',
        index: './index',
        utility: 'lib/utility',
        Utility: './lib/constructor_module',
        dom_module: './dom_module',
    },
    // angular does not support AMD out of the box, put it in a shim
    /**
    shim: {
        'angular': {
            exports: 'angular'
        }
    },
    // kick start application
    deps: ['./bootstrap']
    */
})
// require([
//     './node_modules/jquery/dist/jquery.js'
// ], function($){
define([
        'jquery',
        // 'angular',
        'knockout',
        // 'index',
        'utility',
        'dom_module',
        'ko_module'
    ], function(
        $, /** , angular */ 
        ko /*, index   */, 
        utility, 
        dom_module,
        ko_module ) {
    // $(function(){
    //     alert($);
    // })
    alert("ko: ", ko);//works
    $('body').append('<h3>RequireJS and jQuery work!</h3>');
    $('body').append('<div>Click to get (x, y) coordinates</div>');
    console.log(document);
    console.log(document.body);
    alert(document.body); // This will excecute before console.log()
    var Util = new Utility();
    var Mutil = new Utility();
    Mutil.name = 'John Doe';
    document.body.addEventListener('click', function(event){
        console.log(event.clientX, event.clientY);
        // utility.createBox(event.clientX, event.clientY);
        Util.createBox(event.clientX, event.clientY);
        console.log(Util.name);
        console.log(Mutil.name);
    })
})

// require(['knockout-x.y.z', 'appViewModel', 'domReady!'], function(ko, appViewModel) {
//         ko.applyBindings(new appViewModel());
//     });