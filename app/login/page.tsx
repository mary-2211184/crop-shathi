"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function LoginPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    // No validation (prototype mode)
    localStorage.setItem("user", email || "guest");

    router.push("/dashboard");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-green-300 via-blue-300 to-purple-300">

      <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md">

        <h1 className="text-3xl font-bold text-center text-green-700 mb-6">
          🌿 CropShathi (ক্রপ সাথী)
        </h1>

        {/* Email */}
        <input
          type="email"
          placeholder="Enter your email"
          className="w-full p-3 mb-4 rounded-lg border border-gray-300 bg-white text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-500 shadow-sm"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        {/* Password (UI only) */}
        <input
          type="password"
          placeholder="Enter your password"
          className="w-full p-3 mb-4 rounded-lg border border-gray-300 bg-white text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-500 shadow-sm"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        {/* Login Button */}
        <button
          onClick={handleLogin}
          className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition duration-300"
        >
          Login →
        </button>

        {/* Divider */}
        <div className="text-center text-gray-500 my-4">or</div>

        {/* Google Button */}
        <button
          className="w-full bg-white border py-3 rounded-lg hover:bg-gray-100 transition"
          onClick={() => alert("Google login (prototype)")}
        >
          🔵 Continue with Google
        </button>

        {/* Footer */}
        <p className="text-sm text-center text-gray-400 mt-4">
          Secure access to CropShathi
        </p>

      </div>
    </div>
  );
}