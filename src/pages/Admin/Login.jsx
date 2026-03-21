import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-[#F8FAFC] px-4">
      <div className="bg-white p-6 shadow-lg rounded-xl w-full max-w-md text-center">
        <h2 className="text-xl font-semibold mb-3">Firebase Removed</h2>
        <p className="text-gray-600 mb-5">
          Gallery management now works locally in your browser, so the old Firebase admin login
          is no longer needed.
        </p>
        <Link
          to="/gallery"
          className="inline-flex items-center justify-center bg-gradient-to-r from-[#6C63FF] to-[#00A8A8] text-white px-5 py-2 rounded"
        >
          Open Gallery
        </Link>
      </div>
    </div>
  );
};

export default Login;
