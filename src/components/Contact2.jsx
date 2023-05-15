import React from "react";
import kelopefooter from "../assets/kelope-white.png";
import instagram from "../assets/instagram-logo.png";
import team from "../assets/team.jpg";

const Contact2 = ({ onContactClick }) => {
  return (
    <div
      id="contact"
      className="h-screen max-w-screen m-0 font-sans flex flex-row items-center justify-center"
    >
      <div
        id="left"
        className="bg-gray-900 w-full h-full px-8 py-8 text-white flex flex-col justify-center items-center content-center relative"
      >
        {/* <div id="opacity-bg" className="h-full bg-gray-100 opacity-90 p-4 z-10"> */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-thin text-center  text-gray-400 mt-0 md:mt-24">
          Unleash the power of <br />{" "}
          <span className="font-normal text-white"> visual storytelling</span>
        </h1>
        <p className="mt-4 md:mt-12 text-gray-300 font-thin text-base md:text-xl">
          At Kelope Pictures, we breathe life into stories that mesmerize,
          entertain, and inspire. With a commitment to pushing creative
          boundaries and a dedication to producing visually stunning movies, we
          aim to leave a lasting impact on the hearts and minds of movie
          enthusiasts. Join us on a cinematic journey like no other.
        </p>

        <a
          className="border border-white hover:border-white bg-white hover:bg-transparent hover:text-white text-gray-900 font-semibold py-2 px-4 border border-gray-700 rounded shadow mt-12 w-full md:w-1/2  m-auto font-normal hover:tracking-widest duration-300 text-center"
          href="mailto:style@kelopepictures.com"
        >
          GET IN TOUCH
        </a>

        {/* </div> */}
        <div
          id="footer"
          className="absolute h-56 md:h-48 text-white bottom-0  bg-gray-900 w-full px-16 flex flex  flex-col  lg:flex-row justify-between items-center mb-8 lg:mb-0"
        >
          <div className="flex items-center justify-center">
            <img width="120px" src={kelopefooter} alt="" />
          </div>

          <div className="font-light">
            <a className="" href="mailto:style@kelopepictures.com">
              <p className="hover:underline">style@kelopepictures.com</p>
            </a>
            <p>© Kelopepictures 2023</p>
          </div>

          <div>
            <a target="_blank" href="https://www.instagram.com/kelopepictures/">
              <img
                className="mb-4 md:my-0"
                width="30px"
                src={instagram}
                alt=""
              />
            </a>
          </div>
        </div>
      </div>

      <div
        id="right"
        className="bg-gray-900 w-full h-full hidden lg:flex justify-center items-start"
      >
        <img
          className=" object-contain rounded-md w-2/3 mt-32"
          src={team}
          alt=""
        />
      </div>
    </div>
  );
};

export default Contact2;
