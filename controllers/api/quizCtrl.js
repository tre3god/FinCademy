const Quiz = require("../../models/Quiz");

async function getQuiz(req, res) {
  try {
    const quiz = await Quiz.find({ course: req.params.courseId });
    res.status(200).json(quiz);
  } catch (error) {
    res.status(500).json({ error });
  }
}

async function create(req, res) {
  try {
    const { courseId } = req.params;
    const { question, answers, isCorrect } = req.body;
    const quiz = { question, answers, isCorrect, course: courseId };
    const newQuiz = await Quiz.create(quiz);
    res.status(201).json({ newQuiz });
  } catch (error) {
    res.status(500).json({ error: "It should just work" });
  }
}

module.exports = {
  getQuiz,
  create,
};
