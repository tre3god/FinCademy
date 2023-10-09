import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useNavigate } from "react-router-dom";

export default function CourseCard({ course }) {
	const navigate = useNavigate();
	return (
		<Card style={{ width: "18rem" }}>
			<Card.Img variant="top" src={course.img} />
			<Card.Body>
				<Card.Title>{course.courseTitle}</Card.Title>
				<Card.Text>{course.shortDescription}</Card.Text>
				<Button
					variant="primary"
					onClick={() => navigate(`/courses/${course._id}`)}>
					Learn More
				</Button>
			</Card.Body>
		</Card>
	);
}
