import debug from "debug";
import * as quizAPI from "./quiz-api";

const log = debug("fincademy:quizService");

export async function getQuiz(courseId) {
  const quiz = await quizAPI.getQuiz(courseId);
  log(quiz);
  return quiz;
}

export async function create(formElements, courseId) {
  const { question, answers, isCorrect } = formElements;
  const newQuiz = { question: question.value, answers: answers.value, isCorrect: isCorrect.value, course: courseId };
  const data = await quizAPI.create(newQuiz, courseId);
  log(data);
  return data;
}
