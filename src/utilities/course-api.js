import sendRequest from "./send-request";
const BASE_URL = "/api/courses";

export function createCourse(courseData) {
	return sendRequest(BASE_URL, "POST", courseData);
}

export function getCourses(params) {
	return sendRequest(
		`${BASE_URL}?page=${params.page}&pageSize=${params.pageSize}&sortBy=${params.sortBy}`,
	);
}

export function getOneCourse(courseId) {
	return sendRequest(`${BASE_URL}/${courseId}`);
}

export function getCourseContent(courseId) {
	return sendRequest(`${BASE_URL}/${courseId}/content`);
}
