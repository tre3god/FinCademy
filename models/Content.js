const mongoose = require("mongoose");

const { Schema, model } = mongoose;

const quizSchema = new Schema(
  {
    question: { type: String, required: true },
    option1: { type: String, required: true },
    option2: { type: String, required: true },
    option3: { type: String, required: true },
    option4: { type: String, required: true },
    course: { type: Schema.Types.ObjectId, ref: "Course", required: true },
  },
  { timestamps: true }
);

const contentSchema = new Schema(
  {
    content: { type: String, required: true },
    quiz: [quizSchema],
    course: { type: Schema.Types.ObjectId, ref: "Course", required: true },
  },
  { timestamps: true }
);

module.exports = model("Content", contentSchema);
