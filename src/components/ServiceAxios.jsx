import axios from "axios";

const BASE_URL = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit";

function config() {
  const user = JSON.parse(localStorage.getItem("userLogin"));
  return {
    headers: { Authorization: `Bearer ${user.token}` },
  };
}

function signUp(body) {
  const promise = axios.post(`${BASE_URL}/auth/sign-up`, body);
  return promise;
}
function login(body) {
  const promise = axios.post(`${BASE_URL}/auth/login`, body);
  return promise;
}
function createHabit(body) {
  const promise = axios.post(`${BASE_URL}/habits`, body, config());
  return promise;
}
function listHabits() {
  const promise = axios.get(`${BASE_URL}/habits`, config());
  return promise;
}
function deleteHabit(idHabit) {
  const promise = axios.delete(`${BASE_URL}/habits/${idHabit}`, config());
  return promise;
}
function searchHabits() {
  const promise = axios.get(`${BASE_URL}/habits/today`, config());
  return promise;
}
function markHabitAsConcluded(idHabit) {
  const promise = axios.post(
    `${BASE_URL}/habits/${idHabit}/check`,
    {},
    config()
  );
  return promise;
}
function markOffHabitAsConcluded(idHabit) {
  const promise = axios.post(
    `${BASE_URL}/habits/${idHabit}/uncheck`,
    {},
    config()
  );
  return promise;
}
function getHistoric() {
  const promise = axios.get(`${BASE_URL}/habits/history/daily`);
  return promise;
}
export {
  signUp,
  login,
  createHabit,
  listHabits,
  deleteHabit,
  searchHabits,
  markHabitAsConcluded,
  markOffHabitAsConcluded,
  getHistoric,
};
