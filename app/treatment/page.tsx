"use client";

export default function TreatmentPage() {
  return (
    <div className="max-w-3xl mx-auto">

      <h1 className="text-3xl font-bold text-green-800 mb-4">
        🌿 Treatment & Recommendations
      </h1>

      {/* ALERT */}
      <div className="bg-red-100 p-5 rounded mb-6 shadow">
        <h2 className="text-xl font-bold text-red-700 mb-2">
          ⚠️ Alert
        </h2>
        <p className="text-black">
          Leaf Blight detected. Immediate action required.
        </p>
      </div>

      {/* TREATMENT */}
      <div className="bg-white p-6 rounded shadow mb-6">

        <h2 className="text-xl font-bold text-green-700 mb-3">
          💊 Treatment
        </h2>

        <ul className="list-disc pl-5 text-gray-800 space-y-2">
          <li>Apply fungicide twice weekly</li>
          <li>Remove infected leaves</li>
          <li>Avoid excess water</li>
          <li>Ensure sunlight exposure</li>
        </ul>

      </div>

      {/* RECOMMENDATIONS */}
      <div className="bg-blue-100 p-6 rounded shadow">

        <h2 className="text-xl font-bold text-blue-700 mb-3">
          🌱 Recommendations
        </h2>

        <ul className="list-disc pl-5 text-black space-y-2">
          <li>Check crops daily</li>
          <li>Use resistant seeds</li>
          <li>Maintain field hygiene</li>
          <li>Use organic compost</li>
        </ul>

      </div>

    </div>
  );
}