import CourseCard from "../../components/CourseCard/CourseCard";
import { useState, useEffect } from "react";
import { Col, Row } from "react-bootstrap";

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
	return (
		<>
			<Row>
				{allCourses.map((course, index) => {
					return (
					<Col key={index} xs={12} sm={6} md={4} lg={3}>
						<CourseCard course={course} />
					</Col>
					)
			})}
			</Row>
		</>
	);
}
