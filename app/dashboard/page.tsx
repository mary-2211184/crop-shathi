"use client";

import Link from "next/link";

export default function Dashboard() {
  return (
    <div className="min-h-screen">

      {/* TITLE */}
      <h1 className="text-3xl font-bold text-green-800 mb-2">
        🌿 CropShathi Dashboard
      </h1>

      <p className="text-gray-700 mb-6">
        Welcome back 👋 Monitor your crops smartly
      </p>

      {/* WEATHER SECTION */}
      <div className="grid md:grid-cols-3 gap-6 mb-6">

        {/* TEMPERATURE */}
        <div className="bg-gradient-to-r from-orange-400 to-yellow-300 p-5 rounded-xl text-white shadow">
          <h2 className="text-lg font-bold">🌡 Temperature</h2>
          <p className="text-3xl font-bold mt-2">30°C</p>
          <p>Sunny Day</p>
        </div>

        {/* AIR QUALITY */}
        <div className="bg-gradient-to-r from-blue-400 to-cyan-300 p-5 rounded-xl text-white shadow">
          <h2 className="text-lg font-bold">🌬 Air Quality</h2>
          <p className="text-3xl font-bold mt-2">Good</p>
          <p>AQI: 42</p>
        </div>

        {/* HUMIDITY */}
        <div className="bg-gradient-to-r from-green-400 to-emerald-300 p-5 rounded-xl text-white shadow">
          <h2 className="text-lg font-bold">💧 Humidity</h2>
          <p className="text-3xl font-bold mt-2">65%</p>
          <p>Optimal</p>
        </div>

      </div>

      {/* MAIN FEATURES */}
      <div className="grid md:grid-cols-3 gap-6">

        {/* DETECT DISEASE (MAIN CARD) */}
        <div className="md:col-span-2 bg-white p-6 rounded-xl shadow hover:shadow-lg transition">

          <h2 className="text-xl font-bold text-black mb-2">
            📸 Detect Crop Disease
          </h2>

          <p className="text-gray-700">
            Upload crop images and detect diseases instantly using AI.
          </p>

          <Link href="/upload">
            <button className="mt-4 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition">
              Start Detection →
            </button>
          </Link>

        </div>

        {/* HISTORY */}
        <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">

          <h2 className="text-xl font-bold text-black mb-2">
            📜 History
          </h2>

          <p className="text-gray-700">
            View previous detections and insights.
          </p>

          <Link href="/history">
            <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
              View →
            </button>
          </Link>

        </div>

      </div>

      {/* STATS SECTION */}
      <div className="grid md:grid-cols-3 gap-6 mt-8">

        <div className="bg-green-100 p-4 rounded-lg text-center">
          <h2 className="text-2xl font-bold text-green-800">25+</h2>
          <p className="text-gray-800">Diseases Detected</p>
        </div>

        <div className="bg-blue-100 p-4 rounded-lg text-center">
          <h2 className="text-2xl font-bold text-blue-800">120+</h2>
          <p className="text-gray-800">Images Processed</p>
        </div>

        <div className="bg-purple-100 p-4 rounded-lg text-center">
          <h2 className="text-2xl font-bold text-purple-800">95%</h2>
          <p className="text-gray-800">Accuracy</p>
        </div>

      </div>

    </div>
  );
}