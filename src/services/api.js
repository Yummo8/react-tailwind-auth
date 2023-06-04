import axios from "axios";

const BASE_URL = "http://localhost:5000";

export const signup = async (data) => {
  return axios.post(`${BASE_URL}/signup`, data, {
    headers: { "Content-Type": "application/json" },
  });
};

export const login = async (data) => {
  return axios.post(`${BASE_URL}/login`, data, {
    headers: { "Content-Type": "application/json" },
  });
};
