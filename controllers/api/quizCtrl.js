const Course = require("../../models/Course");
const Quiz = require("../../models/Quiz");

async function create(req, res) {
  try {
    const newQuiz = await Quiz.create({
      question: req.body.question,
      option1: req.body.option1,
      option2: req.body.option2,
      option3: req.body.option3,
      option4: req.body.option4,
      course: req.body.course,
    });
    res.status(201).json(newQuiz);
  } catch (error) {
    res.status(500).json(error);
  }
}

async function showQuiz(req, res) {
  try {
    const course = await Course.findById(req.params.courseId);
    const quiz = await Quiz.find({ course: course._id });
    res.status(200).json(quiz);
  } catch (error) {
    res.status(500).json({ error });
  }
}

module.exports = {
  create,
  showQuiz,
};