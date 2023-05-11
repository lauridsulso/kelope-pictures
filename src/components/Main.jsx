import React from "react";
import videoBg from "../assets/video.mp4";
import circle from "../assets/circle.png";
import arrow from "../assets/arrow.png";

const Main = () => {
  return (
    <div className="w-full h-screen m-0 p-0 font-oswald">
      <a href="#contact">
        <div className="h-full w-full opacity-40 bg-black absolute"></div>

        <video
          className="w-full h-full object-cover"
          src={videoBg}
          autoPlay
          loop
          muted
        />

        <div className="absolute w-full h-full top-0 flex flex-col justify-center items-center text-white">
          <h1 className="text-2xl md:text-5xl lg:text-9xl">KELOPE PICTURES</h1>
          <div className="flex justify-center w-1/4 mt-16">
            <img className="relative w-16" src={circle} alt="" />
            <img
              className="absolute animate-bounce w-6 mt-6"
              src={arrow}
              alt=""
            />
          </div>
        </div>
      </a>
    </div>
  );
};

export default Main;
