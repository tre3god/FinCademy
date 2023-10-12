import { Rating } from "@mui/material";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useNavigate } from "react-router-dom";

export default function CourseCard({ course }) {
	const navigate = useNavigate();

	return (
		<Card border="success" className="d-flex flex-column h-100 mb-3">
			<Card.Img
				variant="top"
				src={course.img}
				style={{ width: "100%", height: "180px" }}
			/>
			<Card.Body>
				<Card.Title>{course.courseTitle}</Card.Title>
				<Card.Text>
					<Rating name="average-rating" value={course.averageRating} readOnly />
				</Card.Text>
				<Card.Text>{course.shortDescription}</Card.Text>
			</Card.Body>
			<Card.Footer className="d-flex justify-content-center">
				<Button
					variant="outline-success"
					onClick={() => navigate(`/courses/${course._id}`)}>
					Read More
				</Button>
			</Card.Footer>
		</Card>
	);
}
