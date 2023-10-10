import { Link } from "react-router-dom";
import { Button, Container, Row, Col, Spinner } from "react-bootstrap";
import * as userService from "../../utilities/users-service";

export default function StudentProfile({ user }) {
	const handleUnsub = async (event) => {
		const courseId = event.currentTarget.getAttribute("course");
		console.log("click unsub " + courseId);

		try {
			const data = await userService.delCourse(courseId);
			console.log("Unsubscribe response:", data);
		} catch (error) {
			console.log(error);
		}
	};

	if (!user) {
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
		<Container className="mt-5">
			<h1>Welcome, {user.name}!</h1>
			<h2>Email: {user.email}</h2>
			<h3>Below are your enrolled courses</h3>
			{user.enrolledCourses?.map((course, index) => (
				<div key={index} className="mb-2">
					<Row>
						<Col sm={1}>{index + 1}.</Col>
						<Col sm={6}>
							<Link to={`/courses/${course.course}`}>{course.course}</Link>
						</Col>
						<Col sm={3}>
							<Link to={`/courses/${course.course}/review`}>
								<Button variant="primary">Review</Button>
							</Link>
						</Col>
						<Col sm={2}>
							<Button variant="danger" onClick={handleUnsub} course={course}>
								Unenroll
							</Button>
						</Col>
					</Row>
				</div>
			))}
		</Container>
	);
}
