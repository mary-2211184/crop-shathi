"use client";

import { useEffect, useState } from "react";

export default function HistoryPage() {
  const [history, setHistory] = useState<any[]>([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("history") || "[]");
    setHistory(data);
  }, []);

  return (
    <div className="max-w-3xl mx-auto">

      <h1 className="text-3xl font-bold text-green-800 mb-2">
        📜 CropShathi History
      </h1>

      <p className="text-gray-800 mb-6">
        View your previous detections
      </p>

      {history.length === 0 ? (
        <div className="bg-white p-6 rounded shadow text-center">
          <p className="text-gray-700 text-lg">
            No history yet 📭
          </p>
        </div>
      ) : (

        <div className="space-y-4">

          {history.map((item, i) => (
            <div
              key={i}
              className="bg-white p-5 rounded shadow"
            >

              <h2 className="text-lg font-bold text-black">
                🌿 {item.disease || "Leaf Disease"}
              </h2>

              <p className="text-gray-800">
                Confidence: {item.confidence || "90%"}
              </p>

              <p className="text-gray-700 mt-2">
                💊 Treatment: Apply fungicide
              </p>

            </div>
          ))}

        </div>
      )}

    </div>
  );
}