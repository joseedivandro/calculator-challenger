function calculateAverage(grade1: number, grade2: number, grade3: number): number {
    const sum = grade1 + grade2 + grade3;
    const average = sum / 3;
    return average;
  }
  
  function calculateGradeAverage() {
    const subject1Grade = parseFloat((document.getElementById("subject1") as HTMLInputElement).value);
    const subject2Grade = parseFloat((document.getElementById("subject2") as HTMLInputElement).value);
    const subject3Grade = parseFloat((document.getElementById("subject3") as HTMLInputElement).value);
  
    if (isNaN(subject1Grade) || isNaN(subject2Grade) || isNaN(subject3Grade)) {
      alert("Please enter valid grades for all subjects.");
    } else {
      const average = calculateAverage(subject1Grade, subject2Grade, subject3Grade);
      document.getElementById("result")!.textContent = "Average: " + average.toFixed(2);
    }
  }
  
  document.getElementById("calculate")!.addEventListener("click", calculateGradeAverage);
  
  document.getElementById("subject3")!.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
      calculateGradeAverage();
    }
  });
  