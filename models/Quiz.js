const mongoose = require("mongoose");

const { Schema, model } = mongoose;

const answerSchema = new Schema(
  {
    text: { type: String },
    isCorrect: { type: Boolean },
  },
  {
    timestamps: true,
  }
);

const quizSchema = new Schema(
  {
    question: { type: String },
    answers: [answerSchema],
    course: { type: Schema.Types.ObjectId, ref: "Course" },
  },
  { timestamps: true }
);

module.exports = model("Quiz", quizSchema);
