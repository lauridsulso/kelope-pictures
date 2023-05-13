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
          Lorem ipsum dolor <br />{" "}
          <span className="font-normal text-white">
            {" "}
            consectetur adipisicing.
          </span>
        </h1>
        <p className="mt-4 md:mt-12 font-thin">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta
          ratione veniam nulla. Iusto repudiandae aperiam architecto aut
          dolorem! Vitae, sequi. Minima ab explicabo facere animi autem quos
          nesciunt distinctio doloribus. Cumque aspernatur soluta pariatur
          obcaecati, accusantium sequi laborum aut totam reprehenderit velit
          porro asperiores quaerat molestiae in commodi earum beatae repellat
          quia excepturi minima error? Corporis quia totam non commodi.
        </p>

        <button
          onClick={onContactClick}
          class="bg-gray-500 hover:bg-gray-700 text-white font-semibold py-2 px-4 border border-gray-700 rounded shadow mt-12 w-full md:w-1/2  m-auto font-normal"
        >
          Cumque aspernatur
        </button>
        {/* </div> */}
        <div
          id="footer"
          className="absolute h-56 md:h-48 text-white bottom-0  bg-gray-900 w-full px-16 flex flex  flex-col  lg:flex-row justify-between items-center mb-8 lg:mb-0"
        >
          <div className="flex items-center justify-center">
            <img width="120px" src={kelopefooter} alt="" />
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

          <div className="font-light">
            <a className="" href="mailto:kelope@pictures.com">
              <p className="hover:underline">kelope@pictures.com</p>
            </a>
            <p>© Kelopepictures 2023</p>
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
