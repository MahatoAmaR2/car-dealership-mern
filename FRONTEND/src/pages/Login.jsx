import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import api from "../api/axios.js";
import Toast from "../components/Toast.jsx";
export default function Login() {
  const navigate = useNavigate();
  const [toast, setToast] = useState(null);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    console.log("Login Data:", formData);
    try {
      const res = await api.post("/auth/login", formData);
      setToast({
        message: "Login successful! ",
        type: "success",
      });
      console.log(res.data.user);
      localStorage.setItem("user", JSON.stringify(res.data.user))
      setTimeout(() => navigate("/"), 1500);
    } catch (err) {
      setToast({
        message: err.response?.data?.message || "Login failed",
        type: "error",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {toast && (
        <Toast
          message={toast.message}
          type={toast.type}
          onClose={() => setToast(null)}
        />
      )}
      <div className="min-h-screen flex items-center justify-center bg-black text-white px-4">
        <div className="w-full max-w-md bg-neutral-900 p-8 rounded-xl border border-neutral-800">
          <h1 className="text-2xl font-bold text-center mb-6">
            Welcome <span className="text-red-600">Back</span>
          </h1>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-sm mb-1">Email</label>
              <input
                type="email"
                name="email"
                required
                placeholder="you@example.com"
                value={formData.email}
                onChange={handleChange}
                className="w-full bg-black border border-neutral-700 rounded-lg px-4 py-2 focus:outline-none "
              />
            </div>

            <div>
              <label className="block text-sm mb-1">Password</label>
              <input
                type="password"
                name="password"
                required
                placeholder="••••••••"
                value={formData.password}
                onChange={handleChange}
                className="w-full bg-black border border-neutral-700 rounded-lg px-4 py-2 focus:outline-none "
              />
            </div>

            <button
              type="submit"
              className="w-full bg-red-600 py-3 rounded-lg font-semibold hover:bg-red-700 transition"
            >
              Login
            </button>
          </form>

          <p className="text-sm text-gray-400 text-center mt-6">
            Don’t have an account?{" "}
            <Link to="/signup" className="text-red-500 hover:underline">
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}
