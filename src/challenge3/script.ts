function factorial(n: number): number {
    if (n === 0 || n === 1) {
      return 1;
    } else {
      return n * factorial(n - 1);
    }
  }
  
  function calculateFactorial() {
    const inputNumber = (document.getElementById("number") as HTMLInputElement).value;
    const number = parseInt(inputNumber);
  
    if (isNaN(number)) {
      alert("Please enter a valid number.");
    } else {
      const result = factorial(number);
      document.getElementById("result")!.textContent = "Factorial: " + result;
    }
  }
  
  document.getElementById("calculate")!.addEventListener("click", calculateFactorial);
  
  document.getElementById("number")!.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
      calculateFactorial();
    }
  });  