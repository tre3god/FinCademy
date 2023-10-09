import debug from "debug";
import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import { getUser } from "../../utilities/users-service";
import CreateReviewPage from "../CourseReviewPage/CreateReviewPage";
import LoginPage from "../AuthPage/LoginPage";
import SignupPage from "../AuthPage/SignupPage";
import StudentProfile from "../StudentProfile/StudentProfile";
import TempLandingPage from "../TempLandingPage/TempLandingPage";
import CourseInfoPage from "../CoursesPage/CourseInfoPage";
import NavBar from "../../components/NavBar/NavBar";
import AllCoursesPage from "../CoursesPage/AllCoursesPage";
import CourseContentPage from "../CourseContentPage/CourseContentPage";
import QuizPage from "../QuizPage/QuizPage";

const log = debug("fincademy:src:App");
localStorage.debug = "fincademy:*";

log("Start app");

export default function App() {
  const [user, setUser] = useState(getUser());

  const updateUser = (user) => setUser(user);

  return (
    <>
      <main className="App">
        <NavBar user={user} setUser={updateUser} />
        {user ? (
          <>
            <Routes>
              <Route path="/" element={<TempLandingPage />} />
              <Route path="/courses" element={<AllCoursesPage />} />
              <Route path="/courses/:courseId" element={<CourseInfoPage />} />
              <Route path="/users/:userId" element={<StudentProfile />} />
              <Route
                path="/courses/:courseId/review"
                element={<CreateReviewPage />}
              />
              <Route
                path="/courses/:courseId/content"
                element={<CourseContentPage />}
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
