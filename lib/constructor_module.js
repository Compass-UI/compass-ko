/** Revealing Module pattern - Singleton */
var Utility = function(){
    /** Utility */
    var name = 'David Shams';
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
    return {
        createBox: createBox,
        name: name
    }
};