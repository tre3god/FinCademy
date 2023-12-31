//* import -> require
require("dotenv").config();
require("./config/database");
const express = require("express");
const path = require("path");
const logger = require("morgan");
const debug = require("debug")("fincademy:server");

const usersRouter = require("./routes/api/usersRoutes");
const enrollsRouter = require("./routes/api/enrollsRoutes");
const coursesRouter = require("./routes/api/coursesRoutes");
const reviewsRouter = require("./routes/api/reviewsRoutes");
const quizRouter = require("./routes/api/quizRoutes");
const checkTokenMiddleware = require("./config/checkToken");

//* app
const app = express();

//* middleware
app.use(logger("dev"));
app.use(express.json());
app.use(express.static(path.join(__dirname, "dist")));

app.use(checkTokenMiddleware);

//* routes
app.use("/api/users", usersRouter);
app.use("/api/users", enrollsRouter);
app.use("/api/courses", coursesRouter);
app.use("/api/courses", reviewsRouter);
app.use("/api/quiz", quizRouter);

//? Catch all routes
app.get("/*", (req, res) => {
	res.sendFile(path.join(__dirname, "dist", "index.html"));
});

//* listen
const port = process.env.PORT || 3000;

app.listen(port, function () {
	debug(`Express app running on port ${port}`);
});
