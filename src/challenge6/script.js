function countVowels(sentence) {
    var vowels = ['a', 'e', 'i', 'o', 'u'];
    var lowerCaseSentence = sentence.toLowerCase();
    var count = 0;
    for (var _i = 0, lowerCaseSentence_1 = lowerCaseSentence; _i < lowerCaseSentence_1.length; _i++) {
        var char = lowerCaseSentence_1[_i];
        if (vowels.includes(char)) {
            count++;
        }
    }
    return count;
}
function countVowelsInSentence() {
    var inputSentence = document.getElementById("sentence").value;
    var sentence = inputSentence.trim();
    if (sentence === '') {
        alert("Please enter a sentence.");
    }
    else {
        var result = countVowels(sentence);
        document.getElementById("result").textContent = "Number of vowels: " + result;
    }
}
document.getElementById("count").addEventListener("click", countVowelsInSentence);
document.getElementById("sentence").addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        countVowelsInSentence();
    }
});
