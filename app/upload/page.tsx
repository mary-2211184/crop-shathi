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

    // Bangla support
    recognition.lang = "bn-BD";

    recognition.onresult = (event: any) => {
      const spokenText = event.results[0][0].transcript;
      setText(spokenText.trim());
    };

    recognition.onerror = () => {
      alert("Voice recognition error");
    };

    recognition.start();
  };

  // 🔥 DETECT BUTTON FUNCTION (IMPORTANT)
  const handleDetect = () => {
    if (!text && !image) {
      alert("Please type, speak, or upload an image");
      return;
    }

    // 🔥 SAVE USER INPUT FOR DETECT PAGE
    localStorage.setItem("userInput", text);

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

        {/* IMAGE UPLOAD */}
        <input
          type="file"
          onChange={(e) => setImage(e.target.files?.[0] || null)}
          className="mb-4 text-black"
        />

        {/* BUTTONS */}
        <div className="flex justify-center gap-3">

          {/* DETECT BUTTON */}
          <button
            onClick={handleDetect}
            className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition"
          >
            Detect →
          </button>

          {/* VOICE BUTTON */}
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