"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function UploadPage() {
  const [text, setText] = useState("");
  const [image, setImage] = useState<File | null>(null);
  const router = useRouter();

  // 🎤 VOICE FUNCTION (BANGLA + ENGLISH)
  const handleVoice = () => {
    const SpeechRecognition =
      (window as any).SpeechRecognition ||
      (window as any).webkitSpeechRecognition;

    if (!SpeechRecognition) {
      alert("Voice not supported in this browser");
      return;
    }

    const recognition = new SpeechRecognition();

    // 🔥 Bangla support
    recognition.lang = "bn-BD";

    recognition.continuous = false;
    recognition.interimResults = false;

    recognition.onresult = (event: any) => {
      const spokenText = event.results[0][0].transcript;

      console.log("Voice:", spokenText);

      setText(spokenText.trim()); // clear text
    };

    recognition.onerror = (event: any) => {
      console.error("Voice error:", event.error);
      alert("Voice recognition failed");
    };

    recognition.start();
  };

  // 📸 DETECT BUTTON
  const handleNext = () => {
    if (!text && !image) {
      alert("Please speak, type, or upload image");
      return;
    }

    localStorage.setItem("imageUploaded", "true");

    router.push("/detect");
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-green-200 via-blue-200 to-purple-200">

      <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md text-center">

        {/* TITLE */}
        <h1 className="text-2xl font-bold text-green-800 mb-4">
          🌿 CropShathi (ক্রপ সাথী)
        </h1>

        {/* TEXT INPUT */}
        <textarea
          placeholder="Describe your crop problem (Bangla or English)"
          className="w-full p-3 border-2 border-gray-300 rounded mb-4 
                     bg-white text-black placeholder-gray-500 
                     focus:outline-none focus:ring-2 focus:ring-green-500"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />

        {/* FILE UPLOAD */}
        <input
          type="file"
          onChange={(e) => setImage(e.target.files?.[0] || null)}
          className="mb-4 text-black"
        />

        {/* BUTTONS */}
        <div className="flex justify-center gap-3">

          <button
            onClick={handleNext}
            className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition"
          >
            Detect →
          </button>

          <button
            onClick={handleVoice}
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
          >
            🎤 Speak
          </button>

        </div>

      </div>
    </div>
  );
}