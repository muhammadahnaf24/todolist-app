// src/pages/Register.js
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { register } from "../services/authService";
import Alert from "../components/Alert";
import Button from "../components/Button";

function Register() {
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [error, setError] = useState("");
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
      const response = await register(form); // Ensure you're using the response correctly
      localStorage.setItem("token", response.token); // Assuming your register function returns a token
      setAlertMessage("Registration successful! Redirecting to login...");
      setAlertVariant("success");
      setTimeout(() => {
        navigate("/login"); // Redirect after a delay
      }, 2000);
    } catch (error) {
      const errorMessage =
        error.response && error.response.data && error.response.data.error
          ? error.response.data.error
          : "Registration failed. Please try again.";
      setAlertMessage(errorMessage);
      setAlertVariant("error");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-fit bg-gray-100 py-16">
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-md">
        <h2 className="mb-6 text-2xl font-semibold text-center">Register</h2>
        {alertMessage && (
          <Alert message={alertMessage} variant={alertVariant} />
        )}
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <input
              name="username"
              type="text"
              placeholder="Name"
              value={form.username}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
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
            Register
          </Button>
          {error && <p className="mt-4 text-red-600 text-center">{error}</p>}
        </form>
        <p className="mt-6 text-center text-gray-600">
          Already have an account?{" "}
          <span
            onClick={() => navigate("/login")}
            className="text-blue-500 cursor-pointer hover:underline"
          >
            Login here
          </span>
        </p>
      </div>
    </div>
  );
}

export default Register;
