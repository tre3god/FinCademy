import { Button, Form } from "react-bootstrap";

export default function CreateReviewPage() {
	const username = "Testing User";
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
					{[1, 2, 3, 4, 5].map((rating) => (
						<Form.Check type="radio" inline key={rating} />
					))}
				</Form.Group>
				<Button variant="primary" type="submit">
					Submit
				</Button>
			</Form>
		</>
	);
}
