const BASE_URL = "/api/users";
import sendRequest from "./send-request";

const postUserData = async (userData) => {
	const response = await fetch(BASE_URL, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify(userData),
	});
	if (response.ok) {
		return await response.json();
	} else {
		throw new Error("Invalid Sign up");
	}
};

const postUserLogin = async (userData) => {
	const response = await fetch(`${BASE_URL}/login`, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify(userData),
	});
	if (response.ok) {
		return await response.json();
	} else {
		throw new Error("Invalid Login");
	}
};

const checkToken = async () => {
	const token = localStorage.getItem("token");
	const response = await fetch(`${BASE_URL}/check-token`, {
		method: "GET",
		headers: {
			Authorization: `Bearer ${token}`,
		},
	});
	if (response.ok) {
		return await response.json();
	} else {
		throw new Error();
	}
};

const findStudentCourses = async (userId) => {
	const token = localStorage.getItem("token");

	const response = await fetch(`${BASE_URL}/${userId}`, {
		method: "GET",
		headers: {
			Authorization: `Bearer ${token}`,
		},
	});
	if (response.ok) {
		return await response.json();
	} else {
		throw new Error();
	}
};

const enrollCourse = (courseId) => {
	return sendRequest(`${BASE_URL}/enroll`, "POST", courseId);
};

const delCourse = async (courseId) => {
	return sendRequest(`${BASE_URL}/unenroll/${courseId}`, "DELETE");
};

const updateQuizScore = (quizScore, courseId) => {
	return sendRequest(`${BASE_URL}/${courseId}/quiz-score`, "PATCH", quizScore)
}

export {
	postUserData,
	postUserLogin,
	checkToken,
	findStudentCourses,
	enrollCourse,
	delCourse,
	updateQuizScore,
};
