function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    }
    else {
        return n * factorial(n - 1);
    }
}
function calculateFactorial() {
    var inputNumber = document.getElementById("number").value;
    var number = parseInt(inputNumber);
    if (isNaN(number)) {
        alert("Please enter a valid number.");
    }
    else {
        var result = factorial(number);
        document.getElementById("result").textContent = "Factorial: " + result;
    }
}
document.getElementById("calculate").addEventListener("click", calculateFactorial);
document.getElementById("number").addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        calculateFactorial();
    }
});
