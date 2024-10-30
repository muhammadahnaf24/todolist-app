// src/pages/Login.js
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../services/authService";
import Button from "../components/Button";
import Alert from "../components/Alert"; // Corrected import path

function Login() {
  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState(""); // This is where the warning comes from
  const [alertMessage, setAlertMessage] = useState("");
  const [alertVariant, setAlertVariant] = useState("info");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await login(form);
      localStorage.setItem("token", response.token);
      setAlertMessage("Login successful!");
      setAlertVariant("success");
      navigate("/");
    } catch (error) {
      const errorMessage =
        error.response && error.response.data && error.response.data.error
          ? error.response.data.error
          : "Login failed. Check your credentials and try again.";

      setError(errorMessage); // Set error message to state
      setAlertMessage(errorMessage); // Use alert for error feedback
      setAlertVariant("error");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-fit bg-gray-100 py-16">
      <div className="w-full max-w-lg p-8 bg-white rounded-lg shadow-md">
        <h2 className="mb-6 text-2xl font-semibold text-center">Login</h2>
        {alertMessage && (
          <Alert message={alertMessage} variant={alertVariant} />
        )}
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <input
              name="email"
              type="email"
              placeholder="Email"
              value={form.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="mb-4">
            <input
              name="password"
              type="password"
              placeholder="Password"
              value={form.password}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <Button type="submit" className="w-full py-2">
            Login
          </Button>
          {error && <p className="mt-4 text-red-600 text-center">{error}</p>}
        </form>
        <p className="mt-6 text-center text-gray-600">
          Don't have an account?{" "}
          <span
            onClick={() => navigate("/register")}
            className="text-blue-500 cursor-pointer hover:underline"
          >
            Register here
          </span>
        </p>
      </div>
    </div>
  );
}

export default Login;
