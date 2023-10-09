import { useParams } from "react-router-dom";

export default function CourseInfoPage() {
	const { courseId } = useParams();
	return (
		<>
			<h1>CourseInfoPage</h1>
			<h2>{courseId}</h2>
		</>
	);
}
