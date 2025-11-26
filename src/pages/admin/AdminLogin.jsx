import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AdminLogin() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    username: "",
    password: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleLogin = (e) => {
    e.preventDefault();

    // Static login credentials (you can switch to API later)
    const ADMIN_USER = "admin";
    const ADMIN_PASS = "ssv@123";

    if (form.username === ADMIN_USER && form.password === ADMIN_PASS) {
      // Save token for Protected Routes
      localStorage.setItem("adminToken", "authenticated");

      navigate("/admin/dashboard"); // redirect to dashboard
    } else {
      setError("Invalid username or password");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="bg-white p-8 rounded-xl w-full max-w-sm shadow-xl border border-gray-200">
        <h1 className="text-2xl font-bold text-center text-[#093f74] mb-6">
          Admin Login
        </h1>

        <form onSubmit={handleLogin} className="space-y-5">
          <div>
            <label className="text-sm text-gray-700">Username</label>
            <input
              type="text"
              name="username"
              value={form.username}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border rounded-lg mt-1"
            />
          </div>

          <div>
            <label className="text-sm text-gray-700">Password</label>
            <input
              type="password"
              name="password"
              value={form.password}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border rounded-lg mt-1"
            />
          </div>

          {error && <p className="text-red-500 text-sm">{error}</p>}

          <button
            type="submit"
            className="w-full bg-[#093f74] text-white py-3 rounded-lg text-lg font-semibold hover:bg-[#b11823] transition"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
