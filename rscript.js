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
        knockout: './node_modules/knockout/build/output/knockout-latest.debug',
        index: './index',
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
        // 'knockout',
        // 'index'
    ], function($ /** , angular, knockout, index */){
    // $(function(){
    //     alert($);
    // })
    alert($);//works
    $('body').append('<h3>RequireJS and jQuery work!</h3>');
    $('body').append('<div>Click to get (x, y) coordinates</div>');
    console.log(document);
    console.log(document.body);
    alert(document.body); // This will excecute before console.log()
    document.body.addEventListener('click', function(event){
        console.log(event.clientX, event.clientY);
        createBox(event.clientX, event.clientY);

    })
})

/** Utility */
function createBox(ex, ey) {
    //get reference to the element
    // var element = document.getElementById(IDI); 

    //a way we can acces the X and Y coordinates
    // var position = element.getBoundingClientRect();
    // var x = position.left;
    // var y = position.top;

    //create, style and set the X/Y of the the div element
    var box = document.createElement("div");
    box.className = "box";
    box.style.left = ex+"px";
    box.style.top = (ey -10)+"px";
    box.style.position = "absolute";

    //Apend the element to the body
    document.body.appendChild(box);
}