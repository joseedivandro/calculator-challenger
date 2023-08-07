function calculateAverage(grade1, grade2, grade3) {
    var sum = grade1 + grade2 + grade3;
    var average = sum / 3;
    return average;
}
function calculateGradeAverage() {
    var subject1Grade = parseFloat(document.getElementById("subject1").value);
    var subject2Grade = parseFloat(document.getElementById("subject2").value);
    var subject3Grade = parseFloat(document.getElementById("subject3").value);
    if (isNaN(subject1Grade) || isNaN(subject2Grade) || isNaN(subject3Grade)) {
        alert("Please enter valid grades for all subjects.");
    }
    else {
        var average = calculateAverage(subject1Grade, subject2Grade, subject3Grade);
        document.getElementById("result").textContent = "Average: " + average.toFixed(2);
    }
}
document.getElementById("calculate").addEventListener("click", calculateGradeAverage);
document.getElementById("subject3").addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        calculateGradeAverage();
    }
});
