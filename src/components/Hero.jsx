import React, { useEffect, useRef } from "react";
import title from "../assets/title.png";
import video from "../assets/hero.mp4";

function Hero() {
  const videoRef = useRef();

  useEffect(() => {
    if (videoRef.current) videoRef.current.playbackRate = 2;
  }, []);
  return (
    <section className="flex h-screen  justify-center items-center" id="hero">
      <div className="flex flex-col justify-center items-center gap-4">
        <div className="flex flex-col justify-center items-center">
          <h1 className="font-bold text-[1.2rem] sm:text-[1.5rem] md:text-[1.8rem] lg:text-[2rem]">
            MacBook Pro
          </h1>
          <img
            className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-xl object-contain"
            src={title}
            alt="MacBook Pro"
          />
        </div>
        <video
          ref={videoRef}
          className="w-full max-w-[60rem] rounded-xl"
          src={video}
          autoPlay
          muted
          playsInline
        />
        <button className="bg-blue-600 px-[1.5rem] py-[0.4rem] rounded-[1.5rem]">
          buy
        </button>
        <p className="text-gray-300 text-[0.7rem]  lg:text-lg font-bold">
          From $1599 or $133.25/month for 12 mo.""
        </p>
      </div>
    </section>
  );
}

export default Hero;
