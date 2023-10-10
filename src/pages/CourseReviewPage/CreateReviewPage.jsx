import { Rating } from "@mui/material";
import { useEffect, useState } from "react";
import { Button, Col, Container, Form, Row, Spinner } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import debug from "debug";
import { addReview } from "../../utilities/review-service";
import * as courseService from "../../utilities/course-service";

const log = debug("fincademy:CreateReviewPage");

export default function CreateReviewPage({ user }) {
	const { courseId } = useParams();
	const [rating, setRating] = useState(0);
	const [course, setCourse] = useState({});
	const navigate = useNavigate();

	const username = user.name;
	const userLeftReviewIndex =
		course.reviews?.findIndex((user) => user.user.name === username) ?? -1;
	const userLeftReview =
		userLeftReviewIndex !== -1 ? course.reviews[userLeftReviewIndex] : null;

	useEffect(() => {
		const fetchContent = async () => {
			try {
				const data = await courseService.getOneCourse(courseId);
				const { oneCourse } = data;
				log(oneCourse);
				setCourse(oneCourse);
			} catch (error) {
				console.log(error);
			}
		};
		fetchContent();
	}, [courseId]);

	const handleSubmit = async (evt) => {
		evt.preventDefault();
		log(evt.target.elements);
		await addReview(evt.target.elements, courseId);
		navigate(`/courses/${courseId}`);
	};

	if (Object.keys(course).length === 0) {
		return (
			<Container className="mt-5">
				<Row>
					<Col>
						<Spinner animation="border" role="status">
							<span className="sr-only"></span>
						</Spinner>
						<div>Loading...</div>
					</Col>
				</Row>
			</Container>
		);
	}

	return (
		<>
			{userLeftReview ? (
				<>
					<h2>Your Review for {course.courseTitle}</h2>
					<Form>
						<Form.Group controlId="displayUsername">
							<Form.Label>Username:</Form.Label>
							<Form.Control type="text" value={username} readOnly />
						</Form.Group>
						<br />
						<Form.Group controlId="reviewText">
							<Form.Label>Your Review</Form.Label>
							<Form.Control
								as="textarea"
								rows={3}
								placeholder={userLeftReview.comments}
								readOnly
							/>
						</Form.Group>
						<Form.Group controlId="rating">
							<Form.Label>Rating</Form.Label>
							<Rating name="rating" value={userLeftReview.rating} readOnly />
						</Form.Group>
						<Button variant="primary" type="submit">
							Edit Review
						</Button>
					</Form>
				</>
			) : (
				<>
					<h2>Review for {course.courseTitle}</h2>
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
			)}
		</>
	);
}
