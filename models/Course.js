const mongoose = require("mongoose");

const { Schema, model } = mongoose;

const reviewSchema = new Schema(
	{
		rating: { type: Number, required: true, min: 1, max: 5 },
		comments: { type: String, required: true },
		user: { type: Schema.Types.ObjectId, ref: "User", required: true },
	},
	{ timestamps: true },
);

const courseSchema = new Schema(
	{
		name: { type: String, required: true },
		shortDescription: { type: String, required: true },
		longDescription: { type: String, required: true },
		price: { type: Number, required: true },
		reviews: [reviewSchema],
	},
	{ timestamps: true },
);

module.exports = model("Course", courseSchema);
