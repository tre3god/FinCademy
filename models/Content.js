const mongoose = require("mongoose");

const { Schema, model } = mongoose;

const quizSchema = new Schema({}, { timestamps: true });

const contentSchema = new Schema(
	{
		content: { type: String, required: true },
		quizzes: [quizSchema],
	},
	{ timestamps: true },
);

module.exports = model("Content", contentSchema);
