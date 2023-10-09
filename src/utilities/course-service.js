import * as courseAPI from "./course-api";

export async function getOneCourse(courseId) {
	const content = await courseAPI.getOneCourse(courseId);
	return content;
}

export async function enrollCourse(courseId) {}
