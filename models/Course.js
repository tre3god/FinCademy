const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const CourseSchema = new Schema(
    {
        id: Number,
        courseTitle: String,
        shortDescription: String,
        longDescription: String,
        courseContent: String,
        quiz: { type: Schema.Types.ObjectId, ref: 'Quiz' },
        price: String,
        reviews: [{ type: Schema.Types.ObjectId, ref: 'Review' }],
        source: String
    }, {
        timestamps: true
    });

module.exports = model("Course", CourseSchema);
