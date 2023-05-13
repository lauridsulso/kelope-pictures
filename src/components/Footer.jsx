import React from "react";
import kelopefooter from "../assets/kelope-white.png";
import instagram from "../assets/instagram-logo.png";

const ContactFooter = () => {
  return (
    <footer className="bg-gray-700 text-white">
      <div
        id="footer"
        className=" h-56 md:h-24 text-white mb-20 bg-gray-900 w-full px-16 flex flex  flex-col  lg:flex-row justify-between items-center mb-8 lg:mb-0"
      >
        <div className="flex items-center justify-center">
          <img width="120px" src={kelopefooter} alt="" />
        </div>

        <div>
          <a target="_blank" href="https://www.instagram.com/kelopepictures/">
            <img className="mb-4 md:my-0" width="30px" src={instagram} alt="" />
          </a>
        </div>

        <div className="font-light">
          <a className="" href="mailto:style@kelopepictures.com">
            <p className="hover:underline">style@kelopepictures.com</p>
          </a>
          <p>© Kelopepictures 2023</p>
        </div>
      </div>
    </footer>
  );
};

export default ContactFooter;
