import React from "react";
import production from "../assets/production.jpg";

const Contact = () => {
  return (
    <div id="contact" className="h-screen max-w-screen m-0 p-16 font-oswald">
      <div className="flex flex-row justify-around">
        <div className="basis-2/5">
          <h1 className="text-8xl">
            Wanna <br></br> collaborate?
          </h1>
        </div>
        <div className="basis-2/5">
          <p className="text-lg">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore
            veritatis, animi amet quae adipisci unde obcaecati tempora
            assumenda, perspiciatis sint possimus sapiente minus ab iste maxime
            doloribus rerum natus deserunt. <br /> <br />
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore
            veritatis, animi amet quae adipisci unde obcaecati tempora
            assumenda, perspiciatis sint possimus sapiente minus ab iste maxime
            doloribus rerum natus deserunt.
          </p>
        </div>
      </div>

      <div className="flex flex-row justify-around mt-16">
        <div className="basis-2/5">
          <img className="w-full" src={production} alt="" />
        </div>
        <div className="basis-2/5 bg-gray-500 px-16 py-6 relative">
          <p className="text-lg">Lorem ipsum dolor sit amet consectetur</p>
          <h2 className="text-4xl font-bold text-white">
            adipisicing elit. Quae accusamus debitis velit commodi non
            voluptatum
          </h2>
          <button className="absolute bottom-10 m-auto w-4/5 hover:bg-transparent bg-black hover:text-black font-semibold text-white py-2 px-4 border hover:border-black border-transparent">
            GET IN TOUCH
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
