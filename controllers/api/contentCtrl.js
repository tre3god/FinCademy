const Course = require("../../models/Course");
const Content = require("../../models/Content");

async function showContent(req, res) {
  try {
    const course = await Course.findById(req.params.courseId);
    const content = await Content.find({ course: course._id });
    res.status(200).json(content);
  } catch (error) {
    res.status(500).json({ error });
  }
}

module.exports = {
  showContent,
};