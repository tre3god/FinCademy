import sendRequest from "./send-request";
const BASE_URL = "/api/courses";

export function getOneCourse(courseId) {
	return sendRequest(`${BASE_URL}/${courseId}`);
}
