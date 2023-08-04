function isPrime(number: number): boolean {
    if (number <= 1) {
      return false;
    }
  
    for (let i = 2; i <= Math.sqrt(number); i++) {
      if (number % i === 0) {
        return false;
      }
    }
  
    return true;
  }
  
  function getFirstNPrimes(n: number): number[] {
    const primes: number[] = [];
    let currentNumber = 2;
  
    while (primes.length < n) {
      if (isPrime(currentNumber)) {
        primes.push(currentNumber);
      }
      currentNumber++;
    }
  
    return primes;
  }
  
  function checkPrime() {
    const inputNumber = (document.getElementById('inputNumber') as HTMLInputElement).valueAsNumber;
    const resultElement = document.getElementById('result') as HTMLParagraphElement;
  
    if (isNaN(inputNumber)) {
      resultElement.textContent = 'Please enter a valid number.';
      return;
    }
  
    const isInputPrime = isPrime(inputNumber);
    const resultMessage = isInputPrime ? 'The number is prime.' : 'The number is not prime.';
    resultElement.textContent = resultMessage;
  }
  
  window.onload = () => {
    const first10Primes = getFirstNPrimes(10);
    console.log('First 10 prime numbers:', first10Primes);
  };
  