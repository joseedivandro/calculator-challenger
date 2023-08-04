function countVowels(sentence: string): number {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    const lowerCaseSentence = sentence.toLowerCase();
    let count = 0;
  
    for (const char of lowerCaseSentence) {
      if (vowels.includes(char)) {
        count++;
      }
    }
  
    return count;
  }
  
  function countVowelsInSentence() {
    const inputSentence = (document.getElementById("sentence") as HTMLInputElement).value;
    const sentence = inputSentence.trim();
  
    if (sentence === '') {
      alert("Please enter a sentence.");
    } else {
      const result = countVowels(sentence);
      document.getElementById("result")!.textContent = "Number of vowels: " + result;
    }
  }
  
  document.getElementById("count")!.addEventListener("click", countVowelsInSentence);
  
  document.getElementById("sentence")!.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
      countVowelsInSentence();
    }
  });
  