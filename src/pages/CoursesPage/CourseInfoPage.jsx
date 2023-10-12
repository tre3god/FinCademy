import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import * as courseService from "../../utilities/course-service";
import { Button, Col, Row, Container, Spinner } from "react-bootstrap";
import debug from "debug";
import ReviewsHistory from "../../components/Reviews/ReviewsHistory";
import { enrollCourse } from "../../utilities/users-service";

const log = debug("fincademy:CoursesPage:CourseInfoPage");

export default function CourseInfoPage({ user, setUser }) {
	const [course, setCourse] = useState({});
	const { courseId } = useParams();
	const [loading, setLoading] = useState(true)
	const navigate = useNavigate();

	useEffect(() => {
		const fetchContent = async () => {
			try {
				const data = await courseService.getOneCourse(courseId);
				const { oneCourse } = data;
				setCourse(oneCourse);
				setLoading(false);
				log(oneCourse);
			} catch (error) {
				console.log(error);
				setLoading(false);
			}
		};
		fetchContent();
	}, [courseId]);

	const handleEnroll = async () => {
		const updatedUser = await enrollCourse({ courseId });
		setUser(updatedUser);
		navigate("/profile");
	};

	if (loading) {
		return (
      <Container className="d-flex justify-content-center vh-100">
        <Spinner animation="border" variant="success" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      </Container>
    );
		}

	return (
		<Container>
			<Row>
				<Col>
					<img
						src={course.img}
						style={{ width: "100%", height: "auto", maxHeight: "450px" }}
					/>
				</Col>
			</Row>
			<Row>
				<Col>
					<h1>{course.courseTitle}</h1>
				</Col>
			</Row>
			<Row>
				<Col>
					<h2>Description</h2>
					<div className="p-2">{course.longDescription}</div>
				</Col>
			</Row>
			<Row>
				<Col>
					<h3>Price</h3>
					<div className="p-2">Course Price: ${course.price}</div>
				</Col>
			</Row>
			<Row>
				<Col>
					<h3>Reviews</h3>
					{course.reviews?.map((review) => (
						<ReviewsHistory key={review._id} review={review} />
					))}
				</Col>
			</Row>
			{user ? (
				<Row className="justify-content-center">
					<Button variant="success" className="col-md-5" onClick={handleEnroll}>
						Enroll
					</Button>
				</Row>
			) : (
				<Row className="justify-content-center">
					<Button
						variant="warning"
						className="col-md-5"
						onClick={() => navigate("/login")}>
						Login to Enroll
					</Button>
				</Row>
			)}
		</Container>
	);
}
