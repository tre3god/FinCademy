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
			<div className='p-5 text-center bg-light'>
			<h1 className='mb-3'>Welcome, {user.name}!</h1>
			<br></br>
			<h3 className="mb-3">Email: {user.email}</h3>
			</div>
			<br></br>
			<h3 className="text-center">Below are your enrolled courses</h3>
			<br></br>
			{user.enrolledCourses?.map((course, index) => (
				<div key={index} className="mb-2 text-center">
					<Row>
						<Col sm={1}>{index + 1}.</Col>
						<Col sm={3}>
							<Link to={`/courses/${course.course._id}/content`}>
								{course.course.courseTitle}
							</Link>
						</Col>

						{course.quizScore === null ? (
							<>
								<Col sm={5}>Complete the Course & Quiz to leave a Review</Col>
							</>
						) : (
							<>
								<Col sm={4}>Quiz score: {course.quizScore}/5</Col>
								<Col sm={1}>
									<Link to={`/courses/${course.course._id}/review`}>
										<Button variant="primary">Review</Button>
									</Link>
								</Col>
							</>
						)}

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
