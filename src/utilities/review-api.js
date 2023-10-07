import sendRequest from "./send-request";

export const addReview = async (review, courseId) => {
	return await sendRequest(`/api/courses/${courseId}`, "POST", review);
};
