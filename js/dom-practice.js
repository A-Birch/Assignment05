/*eslint-env browser*/

//STEP 1

function displayMsg1() {
    "use strict";
    return window.alert("I have been clicked (STEP 1)");
}


//STEP 2

window.onload = function () {
    "use strict";
    var btn = window.document.getElementById("btn");

    function displayMsg2() {
        
        return window.alert("I have been clicked (STEP 2)");
    }

    btn.onclick = displayMsg2;
};

//STEP 3

function displayMsg3() {
    "use strict";
    return window.alert("I have been clicked (STEP 3)");
}

window.addEventListener("load", function () {
    "use strict";
    var btn1 = window.document.getElementById("btn1");
    btn1.addEventListener("click", displayMsg3);
});

//STEP 4

window.addEventListener("load", function () {
    "use strict";
    var btn2 = window.document.getElementById("btn2");
    btn2.addEventListener("click", function () {
        return window.alert("I have been clicked (STEP 4)");
    });
});

//STEP 5



//STEP 6

var $ = function (id) {
    "use strict";
    return window.document.getElementById(id);
};

window.addEventListener("load", function () {
    "use strict";
    $("redirect").addEventListener("click", function (e) {
        e.preventDefault();
        window.alert("You clicked the link.");
        
    });
});


//STEP 7

window.addEventListener("load", function () {
    "use strict";
    $("userMsg").addEventListener("click", function () {
        var message = $("textbox").value;
        window.alert(message);
        $("userMsg").disabled = true;
    });
});

//STEP 8

function init() {
    "use strict";
    var button = $("btn4");
    button.addEventListener("click", function () {
    window.open("newpage.html", "newpage", "width=300, height=300"); 
    });
}

window.addEventListener("load", init);



//STEP 9

var id;

function showText() {
    "use strict";
    window.console.log("Learning JavaScript is fun!");    
}

function startText() {
    "use strict";
    id = window.setInterval(showText, 2000);
}

function stopText() {
    "use strict";
    window.clearInterval(id);
}

window.addEventListener("load", function () {
   "use strict";
    $("btnStart").addEventListener("click", startText);
    $("btnStop").addEventListener("click", stopText);
    
});
    

//STEP 10
var choice;

function defineChoice() {
    "use strict";
    choice = $("choice").value;
    window.alert("You choosed " + choice);
}

window.addEventListener("load", function () {
   "use strict";
    $("btnChoice").addEventListener("click", defineChoice);
});