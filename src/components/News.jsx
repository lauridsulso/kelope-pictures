import React from "react";
import kelopefooter from "../assets/kelope-white.png";
import varietypress from "../assets/presse.jpg";

const News = ({ onBackClick }) => {
  return (
    <div
      id="contact"
      className="min-h-screen max-w-screen pt-24 font-oswald flex flex-col items-center justify-center bg-gray-900 text-gray-300"
    >
      <a onClick={onBackClick} href="">
        <img src={kelopefooter} alt="" className=" w-48 mb-12" />
      </a>
      <div className="w-3/4 md:w-2/3 lg:w-1/2 flex flex-col justify-center">
        <h1 className="text-5xl">Featured on Variety</h1>
        <p className="text-xl mb-4 mt-8 font-thin italic">
          “Jasmin and Joey are the next generation of filmmakers, and i’m
          excited for the future collaboration. Their energy and
          everything-is-possible-mentality is admirable as it is evident. It has
          been a journey following them in their uprising from a school project
          to a debut feature film with international class,” said Michael
          Fleischer at Scandinavian Film Distribution
          <a
            target="_blank"
            href="https://variety.com/2023/film/global/ulrich-thomsen-ripple-joey-moe-jasmin-jiramani-1235609684/"
          >
            {" "}
            <br />
            <span className="underline not-italic text-xl font-medium">
              {" "}
              Read the full article here{" "}
            </span>
          </a>
        </p>
        <img className="w-full xl:w-1/2 mb-8" src={varietypress} alt="" />
      </div>
    </div>
  );
};

export default News;
