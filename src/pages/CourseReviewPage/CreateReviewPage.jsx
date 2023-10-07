import { Rating } from "@mui/material";
import { useState } from "react";
import { Button, Form } from "react-bootstrap";

export default function CreateReviewPage() {
	const username = "Testing User";

	const [rating, setRating] = useState(0);

	return (
		<>
			<h1>CreateReviewPage</h1>
			<h2>Review Course Name here</h2>
			<Form>
				<Form.Group controlId="displayUsername">
					<Form.Label>Username:</Form.Label>
					<Form.Control type="text" placeholder={username} readOnly />
				</Form.Group>
				<br />
				<Form.Group controlId="review">
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
						name="simple-controlled"
						value={rating}
						onChange={(_, newValue) => {
							setRating(newValue);
						}}
					/>
				</Form.Group>
				<Button variant="primary" type="submit">
					Submit
				</Button>
			</Form>
		</>
	);
}
