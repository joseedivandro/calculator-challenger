function generateTable() {
    var inputNumber = document.getElementById("number").value;
    var number = parseInt(inputNumber);
    if (isNaN(number)) {
        alert("Please enter a valid number.");
        return;
    }
    var tableBody = document.getElementById("table-body");
    tableBody.innerHTML = "";
    for (var i = 1; i <= 10; i++) {
        var result = number * i;
        var row = document.createElement("tr");
        row.innerHTML = "<td>".concat(number, " x ").concat(i, "</td><td>").concat(result, "</td>");
        tableBody.appendChild(row);
    }
}
document.getElementById("generate").addEventListener("click", generateTable);
document.getElementById("number").addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        generateTable();
    }
});
