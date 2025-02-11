// Global Variables
var n;
var result;
var option;

// A function to retrieve html form data.
function retrieve() {
    var form = document.getElementById('calc');
    n = form.fibonaci.value;
    option = form.shown.value;
    alert("N = " + n)
}

// A function to retrieve html form data.
function display() {
    var object = document.getElementById('result');
    object.innerHTML = "Result: <br> N/a";
}

// Function to calculate the fibonaci number indicated by the website user.
function calculate() {

}