const Course = require("../../models/Course");

async function create(req, res) {
    const data = req.body;
    try {
        const newCourse = await Course.create(data);
        res.json(newCourse);
    } catch (error) {
        res.status(500).json({ error });
    }
}

module.exports = {
    create,
}