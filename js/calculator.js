/*eslint-env browser*/

var $ = function (id) {
    "use strict";
    return window.document.getElementById(id);
};


function enter(val) {
    "use strict";
    $("result").value +=  val;
    window.console.log($("result").value);
}

function calculate() {
    "use strict";
    $("result").value = eval($("result").value);
    window.console.log($("result").value);
}

function init() {
    "use strict";
    $("buttons").addEventListener("click", function (e) {
        if (e.target.id === "equal") {
            calculate();
        } else {
            enter(e.target.value);
        } 
        window.console.log("Clicked " + e.target.value);
    });

  }


window.addEventListener("load", init, false);