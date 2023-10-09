const mongoose = require("mongoose");

const { Schema, model } = mongoose;

const quizSchema = new Schema(
	{
		question: { type: String, required: true },
		answers: { type:[{
			type: String,
			required: true,
		}],
		validate: [arrayLimit]
	},
		isCorrect: { type: Number, min: 0, max: 3, required: true },
		course: { type: Schema.Types.ObjectId, ref: "Course" },
	},
	{ timestamps: true },
);

function arrayLimit(val) {
	return val.length <= 4;
}

module.exports = model("Quiz", quizSchema);
