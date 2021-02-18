// Create XMLHttpRequest object.
var oXHR = new XMLHttpRequest();

// Initiate request.
oXHR.onreadystatechange = reportStatus;
oXHR.open("GET", "../../assets/lib/js/leaderboard.json", true); // get json file.
oXHR.send();

function reportStatus() {
    if (oXHR.readyState == 4) { // Check if request is complete.

        // Create an HTML table using response from server.
        createTableFromJSON(this.responseText);
    }
}

// Create an HTML table using the JSON data.
function createTableFromJSON(jsonData) {
    var arrBirds = [];
    arrBirds = JSON.parse(jsonData); // Convert JSON to array.

    var col = [];
    for (var i = 0; i < arrBirds.length; i++) {
        for (var key in arrBirds[i]) {
            if (col.indexOf(key) === -1) {
                col.push(key);
            }
        }
    }

    // Create a dynamic table.
    var table = document.createElement("table");

    // Create table header.

    var tr = table.insertRow(-1); // Table row.

    for (var i = 0; i < col.length; i++) {
        var th = document.createElement("th"); // Table header.
        th.innerHTML = col[i];
        tr.appendChild(th);
    }

    // Add JSON to the table rows.
    for (var i = 0; i < arrBirds.length; i++) {

        tr = table.insertRow(-1);

        for (var j = 0; j < col.length; j++) {
            var tabCell = tr.insertCell(-1);
            tabCell.innerHTML = arrBirds[i][col[j]];
        }
    }

    // Finally, add the dynamic table to a container.
    var divContainer = document.getElementById("showTable");
    divContainer.innerHTML = "";
    divContainer.appendChild(table);
}





/////////post to json using nodejs?//////////

// const fs = require('fs');
// const customer = {
//     name: "Newbie Co.",
//     order_count: 0,
//     address: "Po Box City",
// }
// const jsonString = JSON.stringify(customer) fs.writeFile('./leaderboard.json', jsonString, err => {
//     if (err) {
//         console.log('Error writing file', err)
//     } else {
//         console.log('Successfully wrote file')
//     }
// });


// get the form element from dom
const formElement = document.querySelector('form#forms')

// convert the form to JSON
const getFormJSON = (form) => {
    const data = new FormData(form);
    return Array.from(data.keys()).reduce((result, key) => {
        result[key] = data.get(key);
        return result;
    }, {});
};

// handle the form submission event, prevent default form behaviour, check validity, convert form to JSON
const handler = (event) => {
    event.preventDefault();
    const valid = formElement.reportValidity();
    if (valid) {
        const result = getFormJSON(formElement);
        console.log(result)
    }
}

formElement.addEventListener("submit", handler)