function isPrime(number) {
    if (number <= 1) {
        return false;
    }
    for (var i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            return false;
        }
    }
    return true;
}
function getFirstNPrimes(n) {
    var primes = [];
    var currentNumber = 2;
    while (primes.length < n) {
        if (isPrime(currentNumber)) {
            primes.push(currentNumber);
        }
        currentNumber++;
    }
    return primes;
}
// ... (código anterior)
function checkPrime() {
    var inputNumber = document.getElementById('inputNumber').valueAsNumber;
    var resultElement = document.getElementById('result');
    if (isNaN(inputNumber)) {
        resultElement.textContent = 'Please enter a valid number.';
        return;
    }
    var isInputPrime = isPrime(inputNumber);
    var resultMessage = isInputPrime ? 'The number is prime.' : 'The number is not prime.';
    resultElement.textContent = resultMessage;
}
window.onload = function () {
    var first10Primes = getFirstNPrimes(10);
    console.log('First 10 prime numbers:', first10Primes);
    // Adiciona o evento de tecla "Enter" ao input
    var inputNumber = document.getElementById('inputNumber');
    inputNumber.addEventListener('keydown', function (event) {
        if (event.keyCode === 13) { // Verifica se a tecla pressionada é "Enter" (código 13)
            checkPrime(); // Chama a função checkPrime() quando "Enter" é pressionado
        }
    });
};
