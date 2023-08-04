function generateTable() {
    const inputNumber = (document.getElementById("number") as HTMLInputElement).value;
    const number = parseInt(inputNumber);
  
    if (isNaN(number)) {
      alert("Please enter a valid number.");
      return;
    }
  
    const tableBody = document.getElementById("table-body");
    tableBody!.innerHTML = "";
  
    for (let i = 1; i <= 10; i++) {
      const result = number * i;
      const row = document.createElement("tr");
      row.innerHTML = `<td>${number} x ${i}</td><td>${result}</td>`;
      tableBody!.appendChild(row);
    }
  }
  
  document.getElementById("generate")!.addEventListener("click", generateTable);
  
  document.getElementById("number")!.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
      generateTable();
    }
  });
  