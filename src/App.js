// src/App.js
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import TodoListPage from "./pages/TodoListPage";
import Login from "./pages/Login"; // Pastikan untuk mengimpor halaman Login
import Register from "./pages/Register"; // Pastikan untuk mengimpor halaman Register
import ProtectedRoute from "./components/ProtectedRoute"; // Import ProtectedRoute

function App() {
  const location = useLocation();
  const isAuthPage =
    location.pathname === "/login" || location.pathname === "/register";

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar hideLinks={isAuthPage} />{" "}
      <main className="flex-grow">
        <Routes>
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            }
          />
          <Route
            path="/profile"
            element={
              <ProtectedRoute>
                <Profile />
              </ProtectedRoute>
            }
          />
          <Route
            path="/todolist"
            element={
              <ProtectedRoute>
                <TodoListPage />
              </ProtectedRoute>
            }
          />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

// Bungkus App dengan Router
const WrappedApp = () => (
  <Router>
    <App />
  </Router>
);

export default WrappedApp;
