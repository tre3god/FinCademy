import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Button } from "react-bootstrap";
import * as quizService from "../../utilities/quiz-service";

export default function QuizPage() {
  const [quiz, setQuiz] = useState([]);
  const [index, setIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const { courseId } = useParams();

  useEffect(() => {
    const fetchQuiz = async () => {
      try {
        const data = await quizService.getQuiz(courseId);
        setQuiz(data);
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

    const nextIndex = index + 1;
    if (nextIndex < quiz.length) {
      setIndex(nextIndex);
    } else {
      setShowScore(true);
    }
  };

  return (
    <div>
      {showScore ? (
        <div>
          You scored {score} out of {quiz.length}
        </div>
      ) : (
        <>
          <div>
            <div>
              <span>Question {index + 1}</span>/{quiz.length}
            </div>
            <div>{quiz[index]?.question}</div>
          </div>
          <div>
            {quiz[index]?.answers.map((answer) => (
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