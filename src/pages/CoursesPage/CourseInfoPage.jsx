import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import * as courseService from "../../utilities/course-service";
import { Button, Stack } from "react-bootstrap";
import debug from "debug";
import ReviewsHistory from "../../components/Reviews/ReviewsHistory";

const log = debug("fincademy:CoursesPage:CourseInfoPage");

export default function CourseInfoPage() {
	const [course, setCourse] = useState({});
	const { courseId } = useParams();

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

	const handleEnroll = () => {
		//* Push the course into the Student Model
	};

	return (
		<>
			<h1>{course.courseTitle}</h1>
			<Stack gap={3}>
				<div className="p-2">
					Course Long Description: {course.longdescription}
				</div>
				<div className="p-2">Course Price: {course.price}</div>
				<div className="p-2">Course Reviews:</div>
				<ReviewsHistory reviews={course.reviews} />
				<Button className="col-md-5 mx-auto" onClick={handleEnroll}>
					Enroll
				</Button>
			</Stack>
		</>
	);
}
