"use client";
import { useRef, useState } from "react";
import React from "react";

export default function page() {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [fileName, setFileName] = useState<string | null>(null);
  const [duration, setDuration] = useState<string | null>(null);
  const handleVideoInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFileName(file.name);
      const video = document.createElement("video");
      video.src = URL.createObjectURL(file);
      video.onloadedmetadata = () => {
        setDuration(video.duration.toString());
        URL.revokeObjectURL(video.src);
      };
    }
  };

  return (
    <div className="flex justify-center">
      <div className="flex flex-col gap-3 items-start  w-[48rem] border border-neutral-500 mt-4 rounded p-3">
        <span className="text-xl font-bold pt-3">Add video for lesson one</span>
        <input
          type="file"
          accept="video/*"
          className="hidden"
          ref={inputRef}
          onChange={handleVideoInput}></input>
        <button
          onClick={(e) => {
            e.preventDefault();
            inputRef.current?.click();
          }}
          className="bg-pink-500 rounded p-2 text-lg font-bold w-max">
          Click here
        </button>
        {fileName}
        <br />
        Add text for lesson one
        <textarea
          placeholder="Paste or type your input here"
          className="w-full h-[12rem] bg-transparent text-base"></textarea>
        if your done with the course click
        <button className="bg-pink-500 rounded p-2 text-lg font-bold w-max">
          save course
        </button>
        else click here
        <button className="bg-pink-500 rounded p-2 text-lg font-bold w-max">
          Add next lesson
        </button>
      </div>
    </div>
  );
}
