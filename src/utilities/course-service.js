import * as courseAPI from "./course-api";

export async function createCourse(courseData) {
	const content = await courseAPI.createCourse(courseData);
	return content;
}

export async function getOneCourse(courseId) {
	const content = await courseAPI.getOneCourse(courseId);
	return content;
}

export async function getCourseContent(courseId) {
	const content = await courseAPI.getCourseContent(courseId);
	return content;
}
