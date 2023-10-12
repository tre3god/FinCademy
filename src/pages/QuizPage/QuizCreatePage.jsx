import { useState, useEffect } from "react";
import { Form, Button } from "react-bootstrap";
import * as quizService from "../../utilities/quiz-service";
import debug from "debug";

export default function QuizCreatePage() {
  const [quizData, setQuizData] = useState({
    question: "",
    answers: [],
    isCorrect: null
  });
  const [allCourses, setAllCourses] = useState([]);
  let courseId;

  useEffect(() => {
    async function fetchCourses() {
      try {
        const res = await fetch("/api/courses");
        const data = await res.json();
        setAllCourses(data.allCourses);
      } catch (error) {
        debug(error);
      }
    }
    fetchCourses();
  }, []);

  const handleChange = (event) => {
    const { name, value } = event.target;
    if (name === "course") {
      courseId = value;
      return courseId;
    } else if (name === "answer1" || name === "answer2" || name === "answer3" || name === "answer4") {
        const answer = value;
        setQuizData({...quizData, answers: [...answers].push(answer)})
    }
    else if (name === "isCorrect") {
        const int = parseInt(value);
        setQuizData({...quizData, isCorrect: int});
    } else {
        setQuizData({...quizData, [name]: value});
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = await quizService.create(quizData, courseId);
    debug(data);
  };

  return (
    <div className="container mt-5">
      <h2>Create a New Course</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="courseId">
          <Form.Label>Course</Form.Label>
          <Form.Select onChange={handleChange}>
            <option>Select the course</option>
            {allCourses.map((course) => (
              <option key={course._id} name="course" value={`${course._id}`}>
                {course.courseTitle}
              </option>
            ))}
          </Form.Select>
        </Form.Group>
        <Form.Group controlId="courseTitle">
          <Form.Label>Question</Form.Label>
          <Form.Control
            type="text"
            name="question"
            value={quizData.question}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Form.Group controlId="shortDescription">
          <Form.Label>Answer Option 1</Form.Label>
          <Form.Control
            type="text"
            name="answer1"
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Form.Group controlId="longDescription">
          <Form.Label>Answer Option 2</Form.Label>
          <Form.Control
            type="text"
            name="answer2"
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Form.Group controlId="content">
          <Form.Label>Answer Option 3</Form.Label>
          <Form.Control
            type="text"
            name="answer3"
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Form.Group controlId="content">
          <Form.Label>Answer Option 4</Form.Label>
          <Form.Control
            type="text"
            name="answer4"
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Form.Group controlId="price">
          <Form.Label>Correct Answer</Form.Label>
          <Form.Select onChange={handleChange}>
            <option>Select the correct answer</option>
            <option name="isCorrect" value="0">
              1
            </option>
            <option name="isCorrect" value="1">
              2
            </option>
            <option name="isCorrect" value="2">
              3
            </option>
            <option name="isCorrect" value="3">
              4
            </option>
          </Form.Select>
        </Form.Group>
        <Button variant="success" type="submit">
          Create Quiz Question
        </Button>
      </Form>
      <br />
    </div>
  );
}
