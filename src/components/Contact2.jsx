import React from "react";
import kelope from "../assets/kelope.png";

const Contact2 = () => {
  return (
    <div id="contact" className="h-screen max-w-screen m-0 font-oswald flex">
      <div
        id="left"
        className="bg-gray-700 w-full h-full px-16 py-16 text-white flex flex-col justify-center"
      >
        <h1 className="text-5xl font-thin text-center">
          Lorem ipsum dolor <br />{" "}
          <span className="font-normal"> consectetur adipisicing.</span>
        </h1>
        <p className="mt-12">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta
          ratione veniam nulla. Iusto repudiandae aperiam architecto aut
          dolorem! Vitae, sequi. Minima ab explicabo facere animi autem quos
          nesciunt distinctio doloribus. Cumque aspernatur soluta pariatur
          obcaecati, accusantium sequi laborum aut totam reprehenderit velit
          porro asperiores quaerat molestiae in commodi earum beatae repellat
          quia excepturi minima error? Corporis quia totam non commodi.
        </p>
        <button className="bg-blue-800 px-4 py-2 w-full mt-12">
          Wulfkiller
        </button>
      </div>
      <div id="right" className="bg-blue-500 w-full h-full">
        <img className="h-screen w-screen" src={kelope} alt="" />
      </div>
    </div>
  );
};

export default Contact2;
