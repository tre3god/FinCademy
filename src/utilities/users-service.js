import * as userApi from "./users-api";

// import debug from "debug";

// const log = debug("fincademy:utilities:users-service");

const signUp = async (formData) => {
  const { name, email, password } = formData;
  const userData = { name, email, password };
  const token = await userApi.postUserData(userData);
  localStorage.setItem("token", token.token);

  return getUser();
};

const login = async (credentials) => {
  const { email, password } = credentials;
  const loginData = { email, password };
  const token = await userApi.postUserLogin(loginData);
  localStorage.setItem("token", token.token);

  return getUser();
};

function getTokenPayload(token) {
  const tokenArray = token.split(".");
  const middle = tokenArray[1];
  const payload = window.atob(middle);
  return JSON.parse(payload);
}

function getToken() {
  const token = localStorage.getItem("token");

  if (!token) {
    return null;
  }

  const payload = getTokenPayload(token);

  if (payload.exp < Date.now() / 1000) {
    localStorage.removeItem("token");
    return null;
  }

  return token;
}

function getUser() {
  const token = getToken();
  if (token === null) {
    return null;
  }

  const payload = getTokenPayload(token);

  return payload.user;
}

const logOut = () => {
  localStorage.removeItem("token");
};

const checkToken = async () => {
  const data = await userApi.checkToken();
  const date = new Date(data);
  return date;
};

const findStudentCourses = async (userId) => {
  const data = await userApi.findStudentCourses(userId);
  return data;
};

export async function enrollCourse(courseId) {
  const data = await userApi.enrollCourse(courseId);
  return data;
}

const delCourse = async (userId, courseId) => {
  const data = await userApi.delCourse(userId, courseId);
  return data;
};

export {
  signUp,
  getUser,
  getToken,
  logOut,
  login,
  checkToken,
  findStudentCourses,
  delCourse,
};
