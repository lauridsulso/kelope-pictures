import React, { useEffect, useRef } from "react";
import videoBg from "../assets/video.mp4";
import kelopewhite from "../assets/kelope-white.png";

const Main = () => {
  const scrollRef = useRef(null);
  useEffect(() => {
    const handleScroll = () => {
      const viewportHeight = window.innerHeight;

      const scrollPosition =
        window.pageYOffset || document.documentElement.scrollTop;
      const videoContainer = document.getElementById("video-container");
      const blackOverlay = document.getElementById("black-overlay");
      const { scrollTop, scrollHeight, clientHeight } =
        document.documentElement;

      if (scrollTop + clientHeight >= scrollHeight - 10) {
        // Scroll to the bottom
        scrollRef.current.scrollIntoView({ behavior: "smooth" });
      }
      if (videoContainer && blackOverlay) {
        const blackOverlayOpacity = Math.min(
          scrollPosition / (viewportHeight * 0.25),
          1
        );
        blackOverlay.style.opacity = blackOverlayOpacity.toString();
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="w-full h-screen m-0 p-0 font-oswald z-10 ">
      <a href="#contact">
        <div
          id="black-overlay"
          className="h-screen w-full opacity-40 bg-gray-900 absolute"
        ></div>

        <div id="video-container" className="w-screen h-screen">
          <video
            className="w-full h-full object-cover"
            src={videoBg}
            autoPlay
            loop
            muted
          />
        </div>

        <div className="absolute w-full h-full top-0 flex flex-col justify-center items-center text-white">
          <img src={kelopewhite} alt="" />
          {/* <h1 className="text-2xl md:text-5xl lg:text-9xl">KELOPE PICTURES</h1> */}
          <div className="flex justify-center w-1/4 mt-16">
            {/* <img className="relative w-16" src={circle} alt="" /> */}

            {/* <img
              className="absolute animate-bounce  w-6 mt-6"
              src={arrow}
              alt=""
            /> */}
          </div>
        </div>
      </a>
    </div>
  );
};

export default Main;
