import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = () => {
    if (form.email === "admin@udaan.com" && form.password === "1234") {
      localStorage.setItem("role", "admin");
      navigate("/gallery");
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#FCE9E9] via-white to-[#FBF6F6] px-4">
      
      {/* Card */}
      <div className="w-full max-w-md bg-white/80 backdrop-blur-xl shadow-xl rounded-2xl p-8 border border-white/40">

        {/* Back */}
        <button
          onClick={() => navigate("/gallery")}
          className="text-sm text-gray-500 hover:text-gray-700 mb-4"
        >
          ← Back to Gallery
        </button>

        {/* Title */}
        <div className="text-center mb-6">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-[#D4AF37] to-[#1E293B] bg-clip-text text-transparent">
            Staff Access
          </h1>
          <p className="text-sm text-gray-500 mt-1">
            Authorized personnel only
          </p>
        </div>

        {/* Email */}
        <div className="mb-4">
          <label className="text-sm text-gray-600">Email</label>
          <input
            type="email"
            placeholder="admin@udaan.com"
            className="w-full mt-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400 transition"
            onChange={(e) =>
              setForm({ ...form, email: e.target.value })
            }
          />
        </div>

        {/* Password */}
        <div className="mb-4">
          <label className="text-sm text-gray-600">Password</label>

          <div className="relative mt-1">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Enter password"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400 transition"
              onChange={(e) =>
                setForm({ ...form, password: e.target.value })
              }
            />

            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-2 text-sm text-gray-500"
            >
              {showPassword ? "Hide" : "Show"}
            </button>
          </div>
        </div>

        {/* Login Button */}
        <button
          onClick={handleLogin}
          className="w-full bg-gradient-to-r from-[#D4AF37] to-[#1E293B] text-white py-2 rounded-lg shadow-md hover:scale-[1.02] active:scale-[0.98] transition"
        >
          Login
        </button>

        {/* Footer */}
        <p className="text-xs text-center text-gray-400 mt-4">
          Protected access • UDAAN System
        </p>
      </div>
    </div>
  );
}



