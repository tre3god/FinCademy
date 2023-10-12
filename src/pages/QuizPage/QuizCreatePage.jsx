import { useState } from "react";
import { Form, Button, Alert } from "react-bootstrap";
import * as quizService from "../../utilities/quiz-service";
import debug from "debug";
import { useParams } from "react-router-dom";

const log = debug("fincademy:QuizCreatePage");

export default function QuizCreatePage() {
	const { courseId } = useParams();

	const [quizData, setQuizData] = useState({
		question: "",
		answers: ["", "", "", ""],
		isCorrect: 0,
	});

	const [error, setError] = useState("");
	const [successMessage, setSuccessMessage] = useState("");

	const handleChange = (e) => {
		const { name, value } = e.target;
		setQuizData({ ...quizData, [name]: value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const data = await quizService.create(quizData, courseId);
			console.log(data);
			setSuccessMessage("Quiz created successfully!"); // Set success message
			setError(""); // Clear any previous error message
		} catch (err) {
			setError("An error occurred while creating the quiz."); // Set error message
			setSuccessMessage(""); // Clear any previous success message
		}
	};

	const handleAnswerChange = (e, index) => {
		const updatedAnswers = [...quizData.answers];
		updatedAnswers[index] = e.target.value;
		setQuizData({ ...quizData, answers: updatedAnswers });
	};

	return (
		<div className="container mt-5">
			<h2>Create a New Quiz</h2>
			<Form onSubmit={handleSubmit}>
				<Form.Group controlId="question">
					<Form.Label>Question</Form.Label>
					<Form.Control
						type="text"
						name="question"
						value={quizData.question}
						onChange={handleChange}
						required
					/>
				</Form.Group>
				<br />
				<Form.Group controlId="answers">
					<Form.Label>Answers</Form.Label>
					{quizData.answers.map((answer, index) => (
						<Form.Control
							key={index}
							type="text"
							name="answers"
							onChange={(e) => handleAnswerChange(e, index)}
							required
						/>
					))}
				</Form.Group>
				<br />
				<Form.Group controlId="isCorrect">
					<Form.Label>Correct Answer</Form.Label>
					<Form.Control
						as="select"
						name="isCorrect"
						value={quizData.isCorrect}
						onChange={handleChange}>
						{quizData.answers.map((answer, index) => (
							<option key={index} value={index}>
								{answer}
							</option>
						))}
					</Form.Control>
				</Form.Group>
				<br />
				<Button variant="primary" type="submit">
					Create Quiz
				</Button>
			</Form>
			{error && <Alert variant="danger">{error}</Alert>}
			{successMessage && <Alert variant="success">{successMessage}</Alert>}
		</div>
	);
}
