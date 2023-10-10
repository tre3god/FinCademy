const Quiz = require("../../models/Quiz");

async function getQuiz(req, res) {
  try {
    const quiz = await Quiz.find({ course: req.params.courseId });
    res.status(200).json(quiz);
  } catch (error) {
    res.status(500).json({ error });
  }
}

module.exports = {
  getQuiz,
};
