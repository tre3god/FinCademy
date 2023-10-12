import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Button, Spinner, Container } from "react-bootstrap";
import * as quizService from "../../utilities/quiz-service";
import * as usersService from "../../utilities/users-service";

export default function QuizPage() {
  const [quiz, setQuiz] = useState([]);
  const [idx, setIdx] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [status, setStatus] = useState("idle");
  const { courseId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchQuiz = async () => {
      try {
        setStatus("loading");
        const data = await quizService.getQuiz(courseId);
        setStatus("success");
        setQuiz(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchQuiz();
  }, [courseId]);

  const isLoading = status === "loading";

  if (isLoading) {
    return (
      <Container className="d-flex justify-content-center vh-100">
        <Spinner animation="border" variant="success" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      </Container>
    );
  }

  // Quiz adapted from https://github.com/chrisblakely01/quiz-app

  const handleAnswerClick = (index) => {
    if (index === quiz[idx].isCorrect) {
      setScore(score + 1);
    }

    const nextIdx = idx + 1;
    if (nextIdx < quiz.length) {
      setIdx(nextIdx);
    } else {
      setShowScore(true);
    }
  };

  const handleExit = async (event) => {
    event.preventDefault();
    const quizScore = `${score}/${quiz.length}`;
    await usersService.updateQuizScore(quizScore, courseId);
    navigate("/profile");
  };

  return (
    <div>
      {showScore ? (
        <>
          <br />
          <Container className="d-flex justify-content-center">
            <h4>
              You scored {score} out of {quiz.length}
            </h4>
          </Container>
          <br />
          <Container className="d-flex justify-content-center">
            <Button size="sm" variant="secondary" onClick={handleExit}>
              Exit Course
            </Button>
          </Container>
        </>
      ) : (
        <>
          <br />
          <Container>
            <div className="d-flex flex-column align-items-center">
              <h4>
                Question {idx + 1} / {quiz.length}
              </h4>
              <br />
              <h5>{quiz[idx]?.question}</h5>
            </div>
            <br />
            <div className="d-flex flex-column row-gap-1">
              {quiz[idx]?.answers.map((answer, index) => (
                <>
                  <Button
                    key={answer._id}
                    onClick={() => handleAnswerClick(index)}
                    size="sm"
                    variant="success"
                  >
                    {answer}
                  </Button>
                </>
              ))}
            </div>
          </Container>
        </>
      )}
    </div>
  );
}
