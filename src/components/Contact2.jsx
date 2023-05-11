import React from "react";
import kelope from "../assets/kelope.png";
import kelopefooter from "../assets/kelope-footer.jpg";
import instagram from "../assets/instagram-logo.png";

const Contact2 = ({ onContactClick }) => {
  return (
    <div
      id="contact"
      className="h-screen max-w-screen m-0 font-oswald flex flex-row items-center justify-center"
    >
      <div
        id="left"
        className="bg-gray-900 w-full h-full px-8 py-8 text-white flex flex-col justify-center items-center content-center relative"
      >
        {/* <div id="opacity-bg" className="h-full bg-gray-100 opacity-90 p-4 z-10"> */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-thin text-center  text-gray-400 mt-36">
          Lorem ipsum dolor <br />{" "}
          <span className="font-normal text-white">
            {" "}
            consectetur adipisicing.
          </span>
        </h1>
        <p className="mt-12 font-thin">
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
          class="bg-gray-400 hover:bg-gray-700 text-white font-semibold py-2 px-4 border border-gray-700 rounded shadow mt-12 w-full md:w-1/2  m-auto font-normal"
        >
          Cumque aspernatur
        </button>
        {/* </div> */}
        <div
          id="footer"
          className="absolute h-48 text-white bottom-0 bg-gray-900 w-full px-16 flex flex  flex-col  lg:flex-row justify-between items-center mb-8 lg:mb-0"
        >
          <div className="flex items-center justify-center">
            <img src={kelopefooter} alt="" />
          </div>

          <div>
            <img width="40px" src={instagram} alt="" />
          </div>

          <div className="font-light">
            <p>Hear more</p>
            <p></p>
            <p>bla bla</p>
            <a className="" href="">
              <p className="hover:underline">kelope@pictures.com</p>
            </a>
          </div>
        </div>
      </div>

      <div
        id="right"
        className="bg-gray-900 w-full h-full hidden lg:block flex items-center justify-center"
      >
        <p className="text-center text-5xl text-white mt-48">
          stort <br /> <br /> billede <br />
          <br /> her <br />
          <br /> muligvis?
        </p>
        {/* <img className="h-screen w-screen rounded-sm" src={kelope} alt="" /> */}
      </div>
    </div>
  );
};

export default Contact2;
