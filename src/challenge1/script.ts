function calculateResult(): void {
  const num1Input = document.getElementById("num1") as HTMLInputElement;
  const num2Input = document.getElementById("num2") as HTMLInputElement;
  const operatorInput = document.getElementById("operator") as HTMLSelectElement;
  const resultParagraph = document.getElementById("result") as HTMLParagraphElement;

  const num1: number = parseFloat(num1Input.value);
  const num2: number = parseFloat(num2Input.value);
  const operator: string = operatorInput.value;

  let result: number = 0;

  switch (operator) {
    case "+":
      result = num1 + num2;
      break;
    case "-":
      result = num1 - num2;
      break;
    case "*":
      result = num1 * num2;
      break;
    case "/":
      result = num1 / num2;
      break;
    default:
      result = 0;
      break;
  }

  resultParagraph.innerText = `Result: ${result}`;
}

document.getElementById("calculate")?.addEventListener("click", calculateResult);

  