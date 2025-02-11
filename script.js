// Global Variables
var n;
var x = 1;
var result;
var option;

// A function to retrieve html form data.
function retrieve() {
    var form = document.getElementById('calc');
    n = form.fibonaci.value;
    option = form.shown.value;
    calculate();
}

// A function to retrieve html form data.
function display() {
    var object = document.getElementById('result');
    object.innerHTML = "Result: <br> N/a";
}

// Function to calculate the fibonaci number indicated by the website user.
function calculate() {
    for(let i = 0; i < n - 1; i++) {
        result = i + x;
        x++;
    }
    alert("F(" + n + ") = " + result);
}