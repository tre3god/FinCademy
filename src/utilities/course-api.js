import sendRequest from "./send-request";
const BASE_URL = "/api/courses";

export function getContent(courseId) {
  return sendRequest(`${BASE_URL}/${courseId}/content`);
}
