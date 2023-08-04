function isPalindrome(word) {
    var sanitizedWord = word.toLowerCase().replace(/[^a-z0-9]/g, '');
    var reversedWord = sanitizedWord.split('').reverse().join('');
    return sanitizedWord === reversedWord;
}
function checkPalindrome() {
    var inputWord = document.getElementById("word").value;
    var word = inputWord.trim();
    if (word === '') {
        alert("Please enter a word.");
    }
    else {
        var result = isPalindrome(word) ? "It's a palindrome!" : "It's not a palindrome!";
        document.getElementById("result").textContent = "Result: " + result;
    }
}
document.getElementById("check").addEventListener("click", checkPalindrome);
document.getElementById("word").addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        checkPalindrome();
    }
});
