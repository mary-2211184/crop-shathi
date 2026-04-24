"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function DetectPage() {
  const [loading, setLoading] = useState(true);
  const [result, setResult] = useState<any>(null);

  useEffect(() => {
    setTimeout(() => {
      // 🔥 Get user input from localStorage
      const text = localStorage.getItem("userInput") || "";

      let disease = "Healthy Crop";
      let confidence = "95%";
      let treatment = "No treatment needed";

      const lower = text.toLowerCase();

      // 🔥 SMART RULE-BASED DETECTION
      if (lower.includes("yellow") || lower.includes("হলুদ")) {
        disease = "Yellow Leaf Disease";
        confidence = "90%";
        treatment = "Apply nitrogen-rich fertilizer";
      } 
      else if (lower.includes("spot") || lower.includes("দাগ")) {
        disease = "Leaf Spot Disease";
        confidence = "88%";
        treatment = "Apply fungicide spray";
      } 
      else if (lower.includes("dry") || lower.includes("শুক") || lower.includes("শুকিয়ে")) {
        disease = "Drought Stress";
        confidence = "85%";
        treatment = "Increase irrigation and water supply";
      } 
      else if (lower.includes("pest") || lower.includes("পোকা")) {
        disease = "Pest Attack";
        confidence = "92%";
        treatment = "Use appropriate pesticide";
      } 
      else if (lower.includes("brown") || lower.includes("বাদামী")) {
        disease = "Brown Leaf Blight";
        confidence = "89%";
        treatment = "Use fungicide and remove infected leaves";
      }

      // 🔥 Save result to history
      const data = { disease, confidence, treatment };

      const history = JSON.parse(localStorage.getItem("history") || "[]");
      history.push(data);
      localStorage.setItem("history", JSON.stringify(history));

      setResult(data);
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <div className="flex flex-col items-center">

      {/* TITLE */}
      <h1 className="text-3xl font-bold text-green-800 mb-6">
        🌿 CropShathi Result
      </h1>

      {/* LOADING */}
      {loading ? (
        <div className="flex flex-col items-center">
          <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-green-600"></div>
          <p className="mt-3 text-gray-700">Analyzing your crop...</p>
        </div>
      ) : (
        <div className="bg-white p-6 rounded-xl shadow text-center w-80">

          {/* RESULT */}
          <h2 className="text-xl font-bold text-green-700">
            🌿 {result.disease}
          </h2>

          <p className="text-gray-800 mt-2">
            Confidence: {result.confidence}
          </p>

          <p className="text-gray-700 mt-3">
            💊 {result.treatment}
          </p>

          {/* BUTTON */}
          <Link href="/treatment">
            <button className="mt-4 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">
              View Details →
            </button>
          </Link>

        </div>
      )}

    </div>
  );
}