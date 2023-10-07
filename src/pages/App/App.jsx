import debug from "debug";
import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import NavBar from "../../components/NavBar/NavBar";
import { getUser } from "../../utilities/users-service";
import CreateReviewPage from "../CourseReviewPage/CreateReviewPage";
import LoginPage from "../AuthPage/LoginPage";
import SignupPage from "../AuthPage/SignupPage";
import OrderHistoryPage from "../OrderHistoryPage/OrderHistoryPage";

const log = debug("fincademy:src:App");
localStorage.debug = "fincademy:*";

log("Start app");

export default function App() {
	const [user, setUser] = useState(getUser());

	const updateUser = (user) => setUser(user);

	return (
		<main className="App">
			{user ? (
				<>
					<NavBar user={user} setUser={updateUser} />
					<Routes>
						<Route path="/" element={<OrderHistoryPage />} />
						<Route path="/courses" />
						<Route path="/courses/:courseId" />
						<Route path="/users/:userId" />
						<Route
							path="/courses/:courseId/review"
							element={<CreateReviewPage />}
						/>
						<Route path="/courses/:courseId/content" />
					</Routes>
				</>
			) : (
				<>
					<Routes>
						<Route path="/" element={<OrderHistoryPage />} />
						<Route path="/courses" />
						<Route path="/courses/:courseId" />
						<Route path="/login" element={<LoginPage setUser={setUser}/>} />
						<Route path="/signup" element={<SignupPage setUser={setUser}/>} />
					</Routes>
				</>
			)}
		</main>
	);
}
