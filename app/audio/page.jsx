"use client";

import AudioRecorder from "@/components/AudioRecorder";

export default function AudioPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white">
      <h1 className="text-2xl mb-4">Mock Interview - Audio Test</h1>
      <AudioRecorder />
    </div>
  );
}
