import * as courseAPI from "./course-api";

export async function getContent (courseId) {
  const content = await courseAPI.getContent(courseId);
  return content;
}