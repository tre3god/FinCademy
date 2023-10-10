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

export function enrollCourse(courseId) {
	return sendRequest(`${BASE_URL}/enroll`, "POST", courseId);
}

const delCourse = async (userId, courseId) => {
	const token = localStorage.getItem("token");
	const response = await fetch(`${BASE_URL}/${userId}/unsubscribe`, {
		method: "DELETE",
		headers: {
			Authorization: `Bearer ${token}`,
			"Content-Type": "application/json",
		},
		body: JSON.stringify({ userId, courseId }),
	});

	if (response.ok) {
		// Course unsubscribed successfully
	} else {
		throw new Error("Failed to unsubscribe from the course");
	}
};

export {
	postUserData,
	postUserLogin,
	checkToken,
	findStudentCourses,
	delCourse,
};
