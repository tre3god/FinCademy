import debug from "debug";
import * as reviewApi from "./review-api";

const log = debug("fincademy:reviewService");

export const addReview = async (formElements, courseId) => {
	const { reviewText, rating } = formElements;
	const review = { comments: reviewText.value, rating: rating.value };
	log(review);
	const data = await reviewApi.addReview(review, courseId);
	log(data);
};
