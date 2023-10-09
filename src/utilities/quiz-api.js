import sendRequest from "./send-request";
const BASE_URL = "/api/quiz"

export function getQuiz (courseId) {
    return sendRequest(`${BASE_URL}/${courseId}`);
}

export function addQuiz (newQuiz) {
    return sendRequest(BASE_URL, "POST", newQuiz);
}
