import sendRequest from "./send-request";

export const addReview = async (review, courseId) => {
	return await sendRequest(`/api/courses/${courseId}/review`, "POST", review);
};

export const editReview = async (review, courseId) => {
	return await sendRequest(`/api/courses/${courseId}/review`, "PATCH", review);
};
