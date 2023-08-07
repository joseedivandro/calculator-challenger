function calculateFinalValue(initialCapital, interestRate, investmentTime) {
    var monthlyInterestRate = interestRate / 100 / 12;
    var finalValue = initialCapital * Math.pow(1 + monthlyInterestRate, investmentTime);
    return finalValue;
}
function calculateInterest() {
    var initialCapital = parseFloat(document.getElementById("initialCapital").value);
    var interestRate = parseFloat(document.getElementById("interestRate").value);
    var investmentTime = parseFloat(document.getElementById("investmentTime").value);
    if (isNaN(initialCapital) || isNaN(interestRate) || isNaN(investmentTime)) {
        alert("Please enter valid values for all fields.");
    }
    else {
        var finalValue = calculateFinalValue(initialCapital, interestRate, investmentTime);
        document.getElementById("result").textContent = "Final value: " + finalValue.toFixed(2);
    }
}
document.getElementById("calculate").addEventListener("click", calculateInterest);
document.getElementById("investmentTime").addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        calculateInterest();
    }
});
