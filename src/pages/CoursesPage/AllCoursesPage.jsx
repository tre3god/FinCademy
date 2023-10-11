import CourseCard from "../../components/CourseCard/CourseCard";
import { useState, useEffect } from "react";
import { Col, Row, Container } from "react-bootstrap";

export default function AllCoursesPage() {
	const [allCourses, setAllCourses] = useState([]);

	useEffect(() => {
		async function fetchCourses() {
			try {
				const res = await fetch("/api/courses");
				const data = await res.json();
				setAllCourses(data.allCourses);
			} catch (error) {
				console.log("Error fetching courses", error);
			}
		}
		fetchCourses();
	}, []);

	allCourses.forEach((course) => {
		const sumOfRatings = course.reviews.reduce(
			(total, review) => total + review.rating,
			0,
		);
		course.averageRating = sumOfRatings / course.reviews.length;
	});

	allCourses.sort((a, b) => {
		const ratingA = a.averageRating || 0;
		const ratingB = b.averageRating || 0;

		if (ratingA < ratingB) {
			return 1;
		}
		if (ratingA > ratingB) {
			return -1;
		}
		return 0;
	});

	return (
		<>
			<Container
				className="d-flex align-items-center justify-content-center"
				style={{ minHeight: "100vh" }}>
				<Row className="justify-content-md-center">
					{allCourses.map((course, index) => {
						return (
							<Col key={index} xs={12} sm={6} md={4} lg={3}>
								<CourseCard course={course} />
							</Col>
						);
					})}
				</Row>
			</Container>
		</>
	);
}
