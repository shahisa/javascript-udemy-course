// Student score out of total score
// Find percentage and letter grade of the score. 
// A: 90-100 B: 89-80 C:79-70 D:60-69 F: 59-0


function gradeCalculator(studentScore = 0,totalScore = 100){
    let percentScore =  (studentScore / totalScore) * 100
    if (percentScore <= 100 &&  percentScore >=90) {
        let letterGrade = 'A'
    } else if (percentScore <= 89 && percentScore >= 80 ){
        letterGrade = 'B'
    } else if (percentScore <= 79 && percentScore >= 70) {
        letterGrade = 'C'
    } else if (percentScore <= 69 && percentScore >= 60) {
        letterGrade = 'D'
    } else {
        letterGrade = 'F'
    }

    return `This is the student's score: ${studentScore} and it was out of a total score being ${totalScore}. The percentage score they earned was ${percentScore}. 
    if they missed class than the have an automatic zero on their grade. Their letter grade is ${letterGrade} .`
}

console.log(gradeCalculator(78,232))