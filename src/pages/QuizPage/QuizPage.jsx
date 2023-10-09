import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import * as quizService from "../../utilities/quiz-service";

export default function QuizPage() {
  const [quizzes, setQuizzes] = useState([]);
  const [score, setScore] = useState(0);
  const courseId = useParams();

  useEffect(() => {
    const fetchQuiz = async () => {
      try {
        const data = await quizService.getContent(courseId);
        setQuizzes(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchQuiz();
  }, [courseId]);

  return (
    <>
      {quizzes.map((quiz) => (
        <>
          <div key={quiz._id}>
            <h3>{quiz.question}</h3>
            <button type="radio">&nbsp;{quiz.option1}</button>
            <button type="radio">&nbsp;{quiz.option2}</button>
            <button type="radio">&nbsp;{quiz.option3}</button>
            <button type="radio">&nbsp;{quiz.option4}</button>
          </div>
        </>
      ))}
    </>
  );
}