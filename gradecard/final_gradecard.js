function getAverage(scores) {
    let sum = 0;
  
    for (const score of scores) {
      sum += score;
    }
  
    return sum / scores.length;
  }
  
  function getGrade(score) {
    if (score === 100) {
      return "A++";
    } else if (score >= 90) {
      return "A";
    } else if (score >= 80) {
      return "B";
    } else if (score >= 70) {
      return "C";
    } else if (score >= 60) {
      return "D";
    } else {
      return "F";
    }
  }
  
  function hasPassingGrade(score) {
    return getGrade(score) !== "F";
  }
  
  function studentMsg(totalScores, studentScore) {
    const averageScore = getAverage(totalScores);
    const grade = getGrade(studentScore);
    const passingGrade = hasPassingGrade(studentScore);
  
    let message;
    if (passingGrade === true) { message = `Class average: ${averageScore}. Your grade: ${grade}. You passed the course.`}
    else{
      message = `Class average: ${averageScore}. Your grade: ${grade}. You failed the course.`
    }
  
  
    return message;
  }
  
  console.log(studentMsg([56, 23, 89, 42, 75, 11, 68, 34, 91, 19], 100));