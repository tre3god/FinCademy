import { useState } from "react";
import { Form, Button } from "react-bootstrap";
import ReactMarkdown from "react-markdown";
import { createCourse } from "../../utilities/course-service";

export default function CourseCreatePage() {
	const [courseData, setCourseData] = useState({
		courseTitle: "",
		shortDescription: "",
		longDescription: "",
		content: "",
		price: 0,
		img: "",
	});
	const [error, setError] = useState("");

	const handleChange = (e) => {
		const { name, value } = e.target;
		setCourseData({ ...courseData, [name]: value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		if (!error) {
			const data = await createCourse(courseData);
			console.log(data);
		}
	};

	return (
		<div className="container mt-5">
			<h2>Create a New Course</h2>
			<Form onSubmit={handleSubmit}>
				<Form.Group controlId="courseTitle">
					<Form.Label>Course Title</Form.Label>
					<Form.Control
						type="text"
						name="courseTitle"
						value={courseData.courseTitle}
						onChange={handleChange}
						required
					/>
				</Form.Group>
				<br />
				<Form.Group controlId="shortDescription">
					<Form.Label>Short Description</Form.Label>
					<Form.Control
						as="textarea"
						rows={3}
						name="shortDescription"
						value={courseData.shortDescription}
						onChange={handleChange}
						required
					/>
				</Form.Group>
				<br />
				<Form.Group controlId="longDescription">
					<Form.Label>Long Description</Form.Label>
					<Form.Control
						as="textarea"
						rows={5}
						name="longDescription"
						value={courseData.longDescription}
						onChange={handleChange}
						required
					/>
				</Form.Group>
				<br />
				<Form.Group controlId="content">
					<Form.Label>Course Content (Markdown)</Form.Label>
					<Form.Control
						as="textarea"
						rows={10}
						name="content"
						value={courseData.content}
						onChange={handleChange}
						required
					/>
				</Form.Group>
				<div className="markdown-preview">
					<ReactMarkdown>{courseData.content}</ReactMarkdown>
				</div>
				<br />
				<Form.Group controlId="price">
					<Form.Label>Price</Form.Label>
					<Form.Control
						type="number"
						name="price"
						value={courseData.price}
						onChange={handleChange}
						required
						min="0"
					/>
				</Form.Group>
				<br />
				<Form.Group controlId="img">
					<Form.Label>Course Img URL</Form.Label>
					<Form.Control
						type="text"
						name="img"
						value={courseData.img}
						onChange={handleChange}
					/>
				</Form.Group>
				<br />
				<Button variant="primary" type="submit">
					Create Course
				</Button>
			</Form>
			{error && <p className="text-danger">{error}</p>}
		</div>
	);
}
