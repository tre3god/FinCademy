const mongoose = require("mongoose");

const { Schema, model } = mongoose;

const answerSchema = new Schema(
  {
  text: { type: String, required: true },
  isCorrect: { type: Boolean, required: true },
  },
  {
    timestamps: true
});

const quizSchema = new Schema(
  {
    question: { type: String, required: true },
    answers: [answerSchema],
    course: { type: Schema.Types.ObjectId, ref: "Course", required: true },
  },
  { timestamps: true }
);

module.exports = model("Quiz", quizSchema);
