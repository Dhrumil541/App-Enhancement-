import axios from 'axios';

const API_URL = '/api/auth'; // Adjust based on your backend setup

export const registerUser = (username, password, role) => {
  return axios.post(`${API_URL}/register`, { username, password, role });
};

export const loginUser = (username, password) => {
  return axios.post(`${API_URL}/login`, { username, password });
};
