import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import * as courseService from "../../utilities/course-service";
import { Button, Container, Row, Col, Spinner } from "react-bootstrap";
import debug from "debug";
import ReactMarkdown from "react-markdown";

const log = debug("fincademy:CourseContentPage:CourseContentPage");

export default function CourseContentPage({ user }) {
	const [course, setCourse] = useState({});
	const { courseId } = useParams();
	const [loading, setLoading] = useState(true);
	const userCourses = user.enrolledCourses;
	const index = userCourses.findIndex(
		(userCourse) => userCourse.course._id === courseId,
	);

	useEffect(() => {
		const fetchContent = async () => {
			try {
				const data = await courseService.getCourseContent(courseId);
				setCourse(data);
				setLoading(false);
			} catch (error) {
				console.log(error);
				setLoading(false);
			}
		};
		fetchContent();
	}, [courseId]);

	const parsedContent = course.content
		? course.content.replace(/\\n/g, "\n")
		: "";

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
		<Container className="mt-4" style={{ maxWidth: "63%" }}>
			<Row>
				<Col>
					<h1>{course.courseTitle}</h1>
				</Col>
			</Row>
			<Row className="mt-4">
				<Col>
					<ReactMarkdown>{parsedContent}</ReactMarkdown>
				</Col>
			</Row>
			<Row className="mt-4">
				<Col className="text-center d-flex justify-content-center">
					{" "}
					{/* Added d-flex and justify-content-center */}
					<Link to={"/profile"}>
						<Button variant="secondary">Back to Profile</Button>
					</Link>
					&nbsp;
					<Link to={`/quiz/${courseId}`}>
						{userCourses[index]?.quizScore === null ? (
							<Button variant="success">Take the quiz now!</Button>
						) : (
							<Button variant="warning">Try the quiz again!</Button>
						)}
					</Link>
				</Col>
			</Row>
			<Row className="mt-4">
				<Col className="text-center">
					<p>
						Add a new <Link to={`/quiz/create/${courseId}`}>Quiz</Link> to this
						Course.
					</p>
				</Col>
			</Row>
			<br />
			<br />
		</Container>
	);
}
