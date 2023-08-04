function isPalindrome(word: string): boolean {
    const sanitizedWord = word.toLowerCase().replace(/[^a-z0-9]/g, '');
    const reversedWord = sanitizedWord.split('').reverse().join('');
    return sanitizedWord === reversedWord;
  }
  
  function checkPalindrome() {
    const inputWord = (document.getElementById("word") as HTMLInputElement).value;
    const word = inputWord.trim();
  
    if (word === '') {
      alert("Please enter a word.");
    } else {
      const result = isPalindrome(word) ? "It's a palindrome!" : "It's not a palindrome!";
      document.getElementById("result")!.textContent = "Result: " + result;
    }
  }
  
  document.getElementById("check")!.addEventListener("click", checkPalindrome);
  
  document.getElementById("word")!.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
      checkPalindrome();
    }
  });
  