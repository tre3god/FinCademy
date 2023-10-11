import debug from "debug";
import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import { getUser } from "../../utilities/users-service";
import LoginPage from "../AuthPage/LoginPage";
import SignupPage from "../AuthPage/SignupPage";
import StudentProfile from "../StudentProfile/StudentProfile";
import TempLandingPage from "../TempLandingPage/TempLandingPage";
import CourseInfoPage from "../CoursesPage/CourseInfoPage";
import NavBar from "../../components/NavBar/NavBar";
import AllCoursesPage from "../CoursesPage/AllCoursesPage";
import CourseContentPage from "../CourseContentPage/CourseContentPage";
import QuizPage from "../QuizPage/QuizPage";
import "./App.css";
import CourseReviewPage from "../CourseReviewPage/CourseReviewPage";

const log = debug("fincademy:src:App");
localStorage.debug = "fincademy:*";

log("Start app");

export default function App() {

	// get state from session storage, if dont have then go get token
	const [user, setUser] = useState(() => {
		const storedUser = window.sessionStorage.getItem("user");
		return storedUser ? JSON.parse(storedUser) : getUser();
	});
	
	const updateUser = (user) => {
		setUser(user);
	};

	// https://spacejelly.dev/posts/how-to-save-state-to-localstorage-persist-on-refresh-with-react-js/
	// whenever user state changes, set state in session storage
	useEffect(() => {
		window.sessionStorage.setItem("user", JSON.stringify(user));
	}, [user]);

	return (
		<>
			<main className="App">
				<NavBar user={user} setUser={updateUser} />
				{user ? (
					<>
						<Routes>
							<Route path="/" element={<TempLandingPage />} />
							<Route path="/courses" element={<AllCoursesPage />} />
							<Route
								path="/courses/:courseId"
								element={<CourseInfoPage user={user} setUser={updateUser} />}
							/>
							<Route
								path="/profile"
								element={<StudentProfile user={user} setUser={updateUser} />}
							/>
							<Route
								path="/courses/:courseId/review"
								element={<CourseReviewPage user={user} />}
							/>
							<Route
								path="/courses/:courseId/content"
								element={<CourseContentPage user={user} />}
							/>
							<Route path="/quiz/:courseId" element={<QuizPage />} />
						</Routes>
					</>
				) : (
					<>
						<Routes>
							<Route path="/" element={<TempLandingPage />} />
							<Route path="/courses" element={<AllCoursesPage />} />
							<Route path="/courses/:courseId" element={<CourseInfoPage />} />
							<Route
								path="/login"
								element={<LoginPage setUser={updateUser} />}
							/>
							<Route
								path="/signup"
								element={<SignupPage setUser={updateUser} />}
							/>
						</Routes>
					</>
				)}
			</main>
		</>
	);
}
