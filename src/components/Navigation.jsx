import React, { useState, useEffect } from "react";

const Navigation = ({ onNewsClick, onBackClick }) => {
  const [isVisible, setIsVisible] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(window.pageYOffset);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      setIsVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 py-10 px-8 text-white transition-opacity duration-700 z-20 font-sans ${
        isVisible ? "opacity-200" : "opacity-0 pointer-events-none"
      }`}
      style={{ background: "rgba(26, 32, 44, 0)" }}
    >
      <ul className="flex justify-end gap-4">
        <li className="">
          {/* <a
            href="#contact"
            className="font-bold text-2xl font-normal text-white hover:bg-gray-200 px-4 py-2 hover:bg-opacity-50"
            onClick={onBackClick}
          >
            CONTACT
          </a> */}
        </li>
        <li>
          {/* <a
            onClick={onNewsClick}
            href="#"
            className="font-bold text-2xl font-normal text-white hover:bg-gray-200 px-4 py-2 hover:bg-opacity-50"
          >
            NEWS
          </a> */}
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
