import { averageRating } from "../helper/coursesHelper";
import * as courseAPI from "./course-api";
import debug from "debug";

const log = debug("fincademy:courseService");

export async function createCourse(courseData) {
	const content = await courseAPI.createCourse(courseData);
	return content;
}

export async function getCourses(queryParams) {
	const page = queryParams.get("page") || 1;
	const pageSize = queryParams.get("pageSize") || 8;
	const sortBy = queryParams.get("sortBy") || "default";
	const params = { page, pageSize, sortBy };
	const data = await courseAPI.getCourses(params);
	const totalPages = Math.ceil(data.totalCount / pageSize);
	const ratedCourses = averageRating(data.allCourses);

	return { ratedCourses, totalPages };
}

export async function getOneCourse(courseId) {
	const content = await courseAPI.getOneCourse(courseId);
	return content;
}

export async function getCourseContent(courseId) {
	const content = await courseAPI.getCourseContent(courseId);
	return content;
}
