function calculateFinalValue(initialCapital: number, interestRate: number, investmentTime: number): number {
    const monthlyInterestRate = interestRate / 100 / 12;
    const finalValue = initialCapital * Math.pow(1 + monthlyInterestRate, investmentTime);
    return finalValue;
  }
  
  function calculateInterest() {
    const initialCapital = parseFloat((document.getElementById("initialCapital") as HTMLInputElement).value);
    const interestRate = parseFloat((document.getElementById("interestRate") as HTMLInputElement).value);
    const investmentTime = parseFloat((document.getElementById("investmentTime") as HTMLInputElement).value);
  
    if (isNaN(initialCapital) || isNaN(interestRate) || isNaN(investmentTime)) {
      alert("Please enter valid values for all fields.");
    } else {
      const finalValue = calculateFinalValue(initialCapital, interestRate, investmentTime);
      document.getElementById("result")!.textContent = "Final value: " + finalValue.toFixed(2);
    }
  }
  
  document.getElementById("calculate")!.addEventListener("click", calculateInterest);
  
  document.getElementById("investmentTime")!.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
      calculateInterest();
    }
  });
  