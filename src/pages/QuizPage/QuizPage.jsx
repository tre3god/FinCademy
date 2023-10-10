import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Button, Spinner } from "react-bootstrap";
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
      <Spinner animation="border" variant="success" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    );
  }

  // Quiz adapted from https://github.com/chrisblakely01/quiz-app

  const handleAnswerOptionClick = (index) => {
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
    await usersService.updateQuizScore(score, courseId);
    navigate("/profile");
  }

  return (
    <div>
      {showScore ? (
        <>
          <div>
            You scored {score} out of {quiz.length}
          </div>
          <br />
          <Button size="sm" onClick={handleExit}>
            Exit Course
          </Button>
        </>
      ) : (
        <>
          <div>
            <div>
              <span>Question {idx + 1}</span>/{quiz.length}
            </div>
            <br />
            <div>{quiz[idx]?.question}</div>
          </div>
          <br />
          <div>
            {quiz[idx]?.answers.map((answer, index) => (
              <>
                <div className="mb-2">
                  <Button
                    key={answer._id}
                    onClick={() => handleAnswerOptionClick(index)}
                    size="sm"
                  >
                    {answer}
                  </Button>
                  <br />
                </div>
              </>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
