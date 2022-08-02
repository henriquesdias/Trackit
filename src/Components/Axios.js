import axios from "axios";

const BASE_URL = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit";

function signUp(body){
  const promise = axios.post(`${BASE_URL}/auth/sign-up`, body);
  return promise;
}
function login(body){
  const promise = axios.post(`${BASE_URL}/auth/login`, body);
  return promise;
}
function createHabit(body,config){
  const promise = axios.post(`${BASE_URL}/habits`, body, config);
  return promise;
}
function listHabits(){
  const promise = axios.get(`${BASE_URL}/habits`);
  return promise;
}
function deleteHabit(idHabit){
  const promise = axios.delete(`${BASE_URL}/habits/${idHabit}`);
  return promise;
}