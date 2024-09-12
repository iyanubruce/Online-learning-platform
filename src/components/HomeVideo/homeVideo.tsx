"use client";
import React, { useRef, useState } from "react";
import styles from "./video.module.css";
export default function HomeVideo() {
  const videoRef = useRef<HTMLVideoElement | null>(null); // Type the ref properly
  const [isPlaying, setIsPlaying] = useState<boolean>(false); // Initialize state as boolean

  const handlePlayClick = () => {
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current
          .play()
          .then(() => setIsPlaying(true))
          .catch((error) => console.error("Error playing video", error));
      }
    }
  };

  const handleVideoClick = () => {
    if (videoRef.current) {
      if (!videoRef.current.paused) {
        videoRef.current.pause();
        setIsPlaying(false);
      }
    }
  };

  return (
    <div className="h-72 lg:h-[35rem] aspect-video relative grid place-content-center isolate ">
      <video
        ref={videoRef}
        className="absolute top-0 left-0 w-full h-full object-cover z-[-2] rounded"
        poster="/video.png"
        onClick={handleVideoClick}
      >
        <source src="video.mp4" type="video/mp4" />
        <source src="video.webm" type="video/webm" />
        Your browser does not support the video tag.
      </video>
      {!isPlaying && (
        <button
          onClick={handlePlayClick}
          className={`${styles.videobtn} grid place-content-center bg-gradient-to-l from-[#7e56d8] to-[#21b573] rounded-[50%] border w-16 h-16 relative `}
          aria-label="Play Video"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="white"
            stroke="white"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="lucide lucide-play"
          >
            <polygon points="6 3 20 12 6 21 6 3" />
          </svg>
        </button>
      )}
    </div>
  );
}
