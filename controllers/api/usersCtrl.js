const User = require("../../models/User");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const debug = require("debug")("fincademy:controllers:usersCtrl");

const createJWT = (user) => {
	return jwt.sign({ user }, process.env.SECRET, {
		expiresIn: "8hr",
	});
};

const create = async (req, res) => {
	const data = req.body;
	try {
		const user = await User.create(data);
		const token = createJWT(user);
		debug("token: ", token);
		res.status(201).json({ token });
	} catch (error) {
		res.status(500).json({ error });
	}
};

const login = async (req, res) => {
	try {
		const user = await User.findOne({ email: req.body.email });
		if (!user) {
			throw new Error("User not found");
		}
		const match = await bcrypt.compare(req.body.password, user.password);
		if (!match) {
			throw new Error("Incorrect password");
		}
		const token = createJWT(user);
		res.status(200).json({ token });
	} catch (error) {
		const errorMessage = error.message || "Bad Credentials";
		res.status(401).json({ error: errorMessage });
	}
};

const checkToken = (req, res) => {
	debug("req.user", req.user);
	res.json(req.exp);
};

const getOne = async (req, res) => {
	try {
		const user = await User.findById(req.user._id).populate(
			"enrolledCourses.course",
		);
		if (!user) {
			return res.status(404).json({ error: "User not found" });
		}
		res.json({ user });
	} catch (error) {
		res.status(500).json({ error: "Internal Server Error" });
	}
};

const updateQuizScore = async (req, res) => {
	console.log(req.body);
	try {
		const user = await User.findById(req.user._id);
		const courses = user.enrolledCourses;
		const index = courses.findIndex(
			(course) => course.course.toString() === req.params.courseId,
		);
		courses[index].quizScore = parseInt(req.body.quizScore);
		await user.save(); // an array
		// const newQuizScore = await courses.findByIdAndUpdate({course: req.params.courseId}, {quizScore: req.body});
		res.status(200).json({ courses });
	} catch {
		res.status(500).json({ error: "It should just work" });
	}
};

module.exports = { create, login, checkToken, getOne, updateQuizScore };
