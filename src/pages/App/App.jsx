import debug from "debug";

import { useState } from "react";
import { Route, Routes } from "react-router-dom";

import NavBar from "../../components/NavBar/NavBar";

const log = debug("fincademy:src:App");
localStorage.debug = "fincademy:*";

log("Start app");

export default function App() {
	const [user, setUser] = useState(null);

	const updateUser = (user) => setUser(user);

	return (
		<main className="App">
			{user ? (
				<>
					<NavBar user={user} setUser={updateUser} />
					<Routes>
						<Route path="/users/:userId" />
						<Route path="/courses/:courseId/review" />
						<Route path="/courses/:courseId/content" />
					</Routes>
				</>
			) : (
				<>
					<Routes>
						<Route path="/" element={<AllCoursesPage />} />
						<Route path="/:courseId" element={<CourseInfoPage />} />
						<Route path="/login" element={<LoginPage />} />
						<Route path="/signup" element={<SignupPage />} />
					</Routes>
				</>
			)}
		</main>
	);
}
