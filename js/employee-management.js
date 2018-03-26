/*eslint-env browser*/

// ------------The Employee Management Application-------------

var btnDel = [];
var i;
for (i = 0; i < 5; i++) {
    btnDel[i] = "<button class='btnDel" + String(i) + "'>delete</button>";
}

var employeeList = [["John Wayne", "Quality Assurance", 5555, btnDel[0]], 
                    ["Bruce Lee", "VP Sales", 4444, btnDel[1]],
                    ["Fred Franklin", "Marketing", 3333, btnDel[2]],
                    ["Joan Krust", "Accountant", 2222, btnDel[3]],
                    ["David Duhovny", "CEO", 1111, btnDel[4]]];


var $ = function (id) {
    "use strict";
    return window.document.getElementById(id);
};

function showEmployees() {
    "use strict";
    var row, col;
    var tableString = "";
    var table = document.getElementsByTagName("table")[0];
    var tbody = document.createElement('tbody');
    
    $("qtyEmployee").innerHTML = "Showing " + employeeList.length + " employees";
        
    for (row = 0; row < employeeList.length; row += 1) {

        tableString += "<tr>";
        for (col = 0; col < 4; col += 1) {
            tableString += "<td>" + employeeList[row][col] + "</td>";
        }
    tableString += "</tr>";
    }
    tableString += "</tbody>";
    table.appendChild(tbody);
    $("tblBody").innerHTML = tableString;
}

var add = function () {
    "use strict";
    var name, title, extension;
    var employee = [];
       
    name = $("name").value;
    title = $("title").value;
    extension = $("extension").value;
       
    //Basic validation
    if (name === "") {
        $("requireName").innerHTML = "This field is required.";
        return;
    } else {
        $("requireName").innerHTML = "";
        employee.push(name);
    }
    
    if (title === "") {
        $("requireTitle").innerHTML = "This field is required.";
        return;
    } else {
        $("requireTitle").innerHTML = "";
        employee.push(title);
    }
    
    if (extension === "") {
        $("requireExt").innerHTML = "This field is required.";
        return;
    } if (isNaN(extension) || extension.length !== 4) {
        $("requireExt").innerHTML = "The extension must be a 4-digit number";
        return;
    } else {
        $("requireExt").innerHTML = "";
        employee.push(extension);
        window.console.log(employeeList.length);
        btnDel[employeeList.length + 1] = "<button class='btnDel" + String(employeeList.length + 1) + "'>delete</button>";
        employee.push(btnDel[employeeList.length + 1]);
    }
   
    
    window.console.log(employee);
    if (employee.length > 0) {  employeeList.push(employee); }
     window.console.log(employeeList);
    showEmployees();
   
    //Clear fields
    $("regForm").reset();
    $("name").innerHTML = "";
    $("title").innerHTML = "";
    $("extension").innerHTML = "";
    
}

function del(index) {
    "use strict";
    employeeList.splice(index, 1);
    showEmployees();
}

function main() {
    "use strict";
    window.console.log(employeeList);
    showEmployees();
    window.addEventListener("load", function () {
        $("add").addEventListener("click", add);
        
        $("tblBody").addEventListener("click", function (e) {
            
            if (e.target.textContent.match(/delete/)) {
                var i, index;
                var tblBody = $("tblBody");
                var btnElements = tblBody.getElementsByTagName("button");
                for (i = 0; i < btnElements.length; i++) {
                    if (event.target.className === btnElements[i].className) {
                        index = i;
                    }
                }

                del(index);
            }
        });
    });
}

main();
