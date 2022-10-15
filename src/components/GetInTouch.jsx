import { React, useRef } from "react";
import emailjs from "@emailjs/browser";

const GetInTouch = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_6horx94",
        "template_cnazn6k",
        form.current,
        "FRRWEtROcnKTE529d"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div id="" className="bg-gray-500 m-0 p-16 text-white font-oswald">
      <form className="" ref={form} onSubmit={sendEmail}>
        <div className="flex flex-row justify-around">
          <div className="w-full mx-16">
            <label>Name</label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline "
              type="text"
              name="user_name"
            />
          </div>
          <div className="w-full px-16">
            <label>Email</label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="email"
              name="user_email"
            />
          </div>
        </div>
        <div className=" flex flex-col mx-16">
          <label>Message</label>

          <input className="invisible" type="text" />

          <textarea
            className=" shadow appearance-none border rounded text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            name="message"
          />
        </div>
        <input className="bg-green-200 w-full p-2" type="submit" value="Send" />
      </form>
    </div>
  );
};

export default GetInTouch;
