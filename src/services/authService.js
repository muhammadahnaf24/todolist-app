// src/services/authService.js
import axios from "axios";

const API_URL = "https://todolist-app-server.vercel.app/"; // Sesuaikan URL backend Anda

// Register
export const register = async (userData) => {
  const response = await axios.post(`${API_URL}/register`, userData);
  return response.data;
};

// Login
export const login = async (userData) => {
  const response = await axios.post(`${API_URL}/login`, userData);

  // Simpan token ke localStorage jika login berhasil
  if (response.data.token) {
    localStorage.setItem("token", response.data.token);
  }

  return response.data;
};

// Logout
export const logout = () => {
  localStorage.removeItem("token");
};

// Dapatkan token dari localStorage
export const getToken = () => {
  return localStorage.getItem("token");
};

// Periksa apakah pengguna sudah login
export const isAuthenticated = () => {
  return !!getToken();
};
