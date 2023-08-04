var _a;
function calculateResult() {
    const num1Input = document.getElementById("num1");
    const num2Input = document.getElementById("num2");
    const operatorInput = document.getElementById("operator");
    const resultParagraph = document.getElementById("result");
    const num1 = parseFloat(num1Input.value);
    const num2 = parseFloat(num2Input.value);
    const operator = operatorInput.value;
    let result = 0;
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
(_a = document.getElementById("calculate")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", calculateResult);
