import CourseCard from "../../components/CourseCard/CourseCard";
import { useState, useEffect } from "react";

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
			{allCourses.map((course) => {
				return <CourseCard key={course._id} course={course} />;
			})}
		</>
	);
}
