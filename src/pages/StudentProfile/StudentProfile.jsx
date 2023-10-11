import { Link } from "react-router-dom";
import { Button, Container, Row, Col, Spinner } from "react-bootstrap";
import * as userService from "../../utilities/users-service";
import { useEffect } from "react";

export default function StudentProfile({ user, setUser }) {
	useEffect(() => {
		async function fetchUserData() {
			try {
				const updatedUser = await userService.findStudentCourses();
				setUser(updatedUser.user);
			} catch (error) {
				console.log(error);
			}
		}

		fetchUserData();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const handleUnsub = async (event) => {
		const courseId = event.currentTarget.getAttribute("course");

		try {
			const updatedUser = await userService.delCourse(courseId);
			console.log("old", updatedUser);
			setUser(updatedUser.user);
			console.log("new", user);
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
						<Col sm={3}>
							<Link to={`/courses/${course.course._id}/content`}>
								{course.course.courseTitle}
							</Link>
						</Col>
						<Col sm={3}>
							<span>Quiz score: {course.quizScore}/5</span>
						</Col>
						<Col sm={3}>
							<Link to={`/courses/${course.course._id}/review`}>
								<Button variant="primary">Review</Button>
							</Link>
						</Col>
						<Col sm={2}>
							<Button
								variant="danger"
								onClick={handleUnsub}
								course={course.course._id}>
								Unenroll
							</Button>
						</Col>
					</Row>
				</div>
			))}
		</Container>
	);
}
