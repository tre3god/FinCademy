import * as quizAPI from "./quiz-api";

export async function getQuiz (courseId) {
  const quiz = await quizAPI.getQuiz(courseId);
  return quiz;
}

export async function addQuiz (newQuiz) {
  const quiz = await quizAPI.addQuiz(newQuiz);
  return quiz;
}