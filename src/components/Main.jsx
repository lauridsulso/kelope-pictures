import React from "react";
import videoBg from "../assets/video.mp4";
import scroll_down from "../assets/scroll-bar.png";

const Main = () => {
  return (
    <div className="w-full h-screen m-0 p-0">
      <div className="overlay"></div>
      <video
        className="w-full h-full object-cover"
        src={videoBg}
        autoPlay
        loop
        muted
      />
      <div className="absolute w-full h-full top-0 flex flex-col justify-center items-center text-white">
        <h1>KELOPE PICTURES</h1>
        <div className="scroll_down">
          <a href="#contact">
            <img className="pulsate-fwd" src={scroll_down} alt="" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Main;
