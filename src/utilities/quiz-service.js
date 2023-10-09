import * as quizAPI from "./quiz-api";

export async function getQuiz (courseId) {
  const quiz = await quizAPI.getQuiz(courseId);
  return quiz;
}