const mongoose = require("mongoose");

const { Schema, model } = mongoose;

const courseSchema = new Schema(
	{
		name: { type: String, required: true },
		shortDescription: { type: String, required: true },
		content: { type: Schema.Types.ObjectId, ref: "Content", required: true },
		price: { type: Number, required: true },
		reviews: [reviewSchema],
	},
	{ timestamps: true },
);

const reviewSchema = new Schema(
	{
		rating: { type: Number, required: true, min: 1, max: 5 },
		comments: { type: String, required: true },
		user: { type: Schema.Types.ObjectId, ref: "User", required: true },
	},
	{ timestamps: true },
);

module.exports = model("Course", courseSchema);
