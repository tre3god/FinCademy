import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import * as courseService from "../../utilities/course-service";
import { Button, Stack } from "react-bootstrap";
import debug from "debug";
import ReviewsHistory from "../../components/Reviews/ReviewsHistory";
import { enrollCourse } from "../../utilities/users-service";

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
		<>
			<h1>{course.courseTitle}</h1>
			<Stack gap={3}>
				<div className="p-2">{course.longDescription}</div>
				<div className="p-2">Course Price: {course.price}</div>
				<div className="p-2">Course Reviews:</div>
				{course.reviews?.map((review) => (
					<ReviewsHistory key={review._id} review={review} />
				))}
				<Button className="col-md-5 mx-auto" onClick={handleEnroll}>
					Enroll
				</Button>
			</Stack>
		</>
	);
}
