const mongoose = require("mongoose");

const { Schema, model } = mongoose;

// const answerSchema = new Schema(
// 	{
// 		text: { type: String },
// 		isCorrect: { type: Boolean },
// 	},
// 	{
// 		timestamps: true,
// 	},
// );

const quizSchema = new Schema(
	{
		question: { type: String },
		answers: [{ type: String }], //restrict the length,
		isCorrect: { type: Number, min: 0, max: 3, required: true },
		course: { type: Schema.Types.ObjectId, ref: "Course" },
	},
	{ timestamps: true },
);

module.exports = model("Quiz", quizSchema);
