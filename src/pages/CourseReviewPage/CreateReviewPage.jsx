import { Rating } from "@mui/material";
import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import debug from "debug";
import { addReview } from "../../utilities/review-service";

const log = debug("fincademy:CreateReviewPage");

export default function CreateReviewPage() {
	const username = "Testing User";
	const courseId = "12345";

	const [rating, setRating] = useState(0);
	const navigate = useNavigate();

	const handleSubmit = async (evt) => {
		evt.preventDefault();
		log(evt.target.elements);
		await addReview(evt.target.elements, courseId);
		navigate("/courses/2");
	};

	return (
		<>
			<h1>CreateReviewPage</h1>
			<h2>Review Course Name here</h2>
			<Form onSubmit={handleSubmit}>
				<Form.Group controlId="displayUsername">
					<Form.Label>Username:</Form.Label>
					<Form.Control type="text" value={username} readOnly />
				</Form.Group>
				<br />
				<Form.Group controlId="reviewText">
					<Form.Label>Leave a Review</Form.Label>
					<Form.Control
						as="textarea"
						rows={3}
						placeholder="Write your review here"
					/>
				</Form.Group>
				<Form.Group controlId="rating">
					<Form.Label>Rating</Form.Label>
					<Rating
						name="rating"
						value={rating}
						onChange={(_, newValue) => {
							setRating(newValue);
						}}
					/>
				</Form.Group>
				<Button variant="primary" type="submit">
					Submit Review
				</Button>
			</Form>
		</>
	);
}
