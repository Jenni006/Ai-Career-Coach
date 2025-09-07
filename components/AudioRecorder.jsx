"use client";
import { useState, useRef } from "react";

export default function AudioRecorder() {
  const [isRecording, setIsRecording] = useState(false);
  const mediaRecorderRef = useRef(null);
  const audioChunksRef = useRef([]);

  const startRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      mediaRecorderRef.current = new MediaRecorder(stream);

      mediaRecorderRef.current.ondataavailable = (event) => {
        if (event.data.size > 0) {
          audioChunksRef.current.push(event.data);
        }
      };

      mediaRecorderRef.current.onstop = async () => {
        const audioBlob = new Blob(audioChunksRef.current, { type: "audio/webm" });
        audioChunksRef.current = [];

        const formData = new FormData();
        formData.append("file", audioBlob, "recording.webm");

        await fetch("http://localhost:8000/upload-audio", {
          method: "POST",
          body: formData,
        });
      };

      mediaRecorderRef.current.start();
      setIsRecording(true);
    } catch (error) {
      console.error("Error accessing microphone:", error);
    }
  };

  const stopRecording = () => {
    if (mediaRecorderRef.current && isRecording) {
      mediaRecorderRef.current.stop();
      setIsRecording(false);
    }
  };

  return (
    <div className="p-4">
      <button
        onClick={isRecording ? stopRecording : startRecording}
        className="px-4 py-2 rounded bg-blue-600 text-white"
      >
        {isRecording ? "Stop Recording" : "Start Recording"}
      </button>
    </div>
  );
}
