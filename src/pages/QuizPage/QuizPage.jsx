import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Button } from "react-bootstrap";
import * as quizService from "../../utilities/quiz-service";

export default function QuizPage() {
  const [quiz, setQuiz] = useState([]);
  const [idx, setIdx] = useState(0);
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
              <span>Question {idx + 1}</span>/{quiz.length}
            </div>
            <br />
            <div>{quiz[idx]?.question}</div>
          </div>
          <br />
          <div>
            {quiz[idx]?.answers.map((answer, index) => (
              <>
              <Button
                key={answer._id}
                onClick={() => handleAnswerOptionClick(index)}
              >
                {answer}
              </Button><br />
              </>
            ))}
          </div>
        </>
      )}
    </div>
  );
}