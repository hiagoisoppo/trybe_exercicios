const schoolGrades = (rightAnswers, studentAnswers) => {
  let studentGrade = 0;
  rightAnswers.forEach((number, index) => {
    if (number === studentAnswers[index]) studentGrade += 1;
  });
  return studentGrade;
};

const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

console.log(schoolGrades(RIGHT_ANSWERS, STUDENT_ANSWERS));