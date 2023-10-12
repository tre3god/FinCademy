import debug from "debug";
import * as quizAPI from "./quiz-api";

const log = debug("fincademy:quizService");

export async function getQuiz(courseId) {
	const quiz = await quizAPI.getQuiz(courseId);
	log(quiz);
	return quiz;
}

export async function create(quizData, courseId) {
	log(quizData);
	const data = await quizAPI.create(quizData, courseId);
	log(data);
	return data;
}
