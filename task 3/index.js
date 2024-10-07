//  task-3 create a form with input fields and a submit button.
//  Use Javascript to validate the form and display an error message if the input is invalid

// var inp1 = document.querySelector("#inp1");
// var inp2 = document.querySelector("#inp2");
// if(inp1.value === '' || inp2.value === ''){
//    h4.textContent = "error, some are empty"
//    h4.style.color = "red";
// }
// else{
//     h4.textContent = "";
//     h4.style.color = "black"; 

var form = document.querySelector("form");
var inps = document.querySelectorAll('input[type="text"]');
var h4 = document.querySelector("h4");


form.addEventListener("submit", function (ev) {
    ev.preventDefault();
    for (var i = 0; i<inps.length; i++) {
        if (inps[i] === '') {
            h4.textContent = "Error, blank";
            h4.style.color = "red"
            break;
        }
    }

});