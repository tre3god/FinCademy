import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import * as courseService from "../../utilities/course-service";
import { Button, Stack, Col, Row, Container } from "react-bootstrap";
import debug from "debug";
import ReviewsHistory from "../../components/Reviews/ReviewsHistory";
import { enrollCourse } from "../../utilities/users-service";
import { auto } from "@popperjs/core";

const log = debug("fincademy:CoursesPage:CourseInfoPage");

export default function CourseInfoPage() {
	const [course, setCourse] = useState({});
	const { courseId } = useParams();
	const navigate = useNavigate();

	useEffect(() => {
		const fetchContent = async () => {
			try {
				const data = await courseService.getOneCourse(courseId);
				const { oneCourse } = data;
				setCourse(oneCourse);
				log(oneCourse);
			} catch (error) {
				console.log(error);
			}
		};
		fetchContent();
	}, [courseId]);

	const handleEnroll = async () => {
		await enrollCourse(courseId);
		navigate(`/courses/${course._id}/content`);
	};

	return (
		<Container>
			<Row>
				<Col>
					<img src={course.img} style={{ width: '100%', height: 'auto', maxHeight: "450px" }} />
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
					<h2>Price</h2>
					<div className="p-2">Course Price: ${course.price}</div>
				</Col>
			</Row>
			<Row>
				<Col>
					<h2>Reviews</h2>
					{course.reviews?.map((review) => (
						<ReviewsHistory key={review._id} review={review} />
					))}
				</Col>
			</Row>
			<Row className="justify-content-center">
				<Button className="col-md-5" onClick={handleEnroll}>
					Enroll
				</Button>
			</Row>
		</Container>
	);
}
