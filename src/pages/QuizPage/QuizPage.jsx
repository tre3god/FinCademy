import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Button } from "react-bootstrap";
import * as quizService from "../../utilities/quiz-service";

export default function QuizPage() {
  const [quizzes, setQuizzes] = useState([]);
  const [index, setIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const { courseId } = useParams();

  useEffect(() => {
    const fetchQuiz = async () => {
      try {
        const data = await quizService.getQuiz(courseId);
        setQuizzes(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchQuiz();
  }, [courseId]);

  // Quiz referenced from https://github.com/chrisblakely01/quiz-app

  const handleAnswerOptionClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    const nextQuestion = index + 1;
    if (nextQuestion < quizzes.length) {
      setIndex(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  return (
    <div>
      {showScore ? (
        <div>
          You scored {score} out of {quizzes.length}
        </div>
      ) : (
        <>
          <div>
            <div>
              <span>Question {index + 1}</span>/{quizzes.length}
            </div>
            <div>{quizzes[index].question}</div>
          </div>
          <div>
            {quizzes[index].answers.map((answer) => (
              <Button
                key={answer._id}
                onClick={() => handleAnswerOptionClick(answer.isCorrect)}
              >
                {answer.text}
              </Button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
