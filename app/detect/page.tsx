"use client";

import { useEffect, useState } from "react";

export default function DetectPage() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 2000);
  }, []);

  return (
    <div className="flex flex-col items-center">

      <h1 className="text-3xl font-bold text-green-800 mb-6">
        🌿 CropShathi Result
      </h1>

      {loading ? (
        <p>Analyzing crop...</p>
      ) : (
        <div className="bg-white p-6 rounded-xl shadow text-center">

          <h2 className="text-xl font-bold text-green-700">
            🌿 Disease Detected
          </h2>

          <p className="text-lg">Leaf Blight</p>
          <p className="text-gray-600">Confidence: 92%</p>

          <p className="mt-3 text-gray-700">
            💊 Use fungicide twice weekly
          </p>

        </div>
      )}

    </div>
  );
}