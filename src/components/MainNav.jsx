/* eslint-disable react/prop-types */
import "./MainNav.css";
import { useState, useRef } from "react";

const MainNav = ({ onButtonClick }) => {
  const [activeButton, setActiveButton] = useState("About");
  const dropdownRef = useRef(null);

  const handleSetActive = (button) => {
    if (dropdownRef.current) {
      dropdownRef.current.removeAttribute("open");
    }

    setActiveButton(button);
    onButtonClick(button);
  };

  return (
    <>
      <section className="w-full lg:w-1/4 h-auto lg:h-screen p-6 bg-main-primary lg:flex hidden flex-col justify-center mx-auto">
        <div className="flex flex-col justify-center items-center lg:my-10 text-center">
          <img
            className={`w-28 sm:w-38 md:w-40 lg:w-48 
                            h-28 sm:h-38 md:h-40 lg:h-48 
                            rounded-full object-cover border-8 border-white" ${
                              activeButton === "Landing" ? "btn-outline" : ""
                            }`}
            src="/picture.JPG"
            alt="picture of Ethan"
          />
          <h1
            className="text-5xl md:text-6xl lg:text-6xl xl:text-7xl 
                        font-extrabold mt-2 mb-8 lg:p-4 lg:my-0"
          >
            Ethan Gapay
          </h1>
        </div>

        <div
          id="buttons"
          className="flex lg:flex-col flex-row items-center justify-center lg:space-y-4"
        >
          <button
            onClick={() => handleSetActive("About")}
            className={`btn btn-xs xs:btn-sm sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl w-1/5 lg:w-1/2 bg-main-text ${
              activeButton === "About" ? "btn-active btn-outline" : ""
            }`}
          >
            About
          </button>
          <button
            onClick={() => handleSetActive("Skills")}
            className={`btn btn-xs xs:btn-sm sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl w-1/5 lg:w-1/2 bg-main-text ${
              activeButton === "Skills" ? "btn-active btn-outline" : ""
            } `}
          >
            Skills
          </button>
          <button
            onClick={() => handleSetActive("Projects")}
            className={`btn btn-xs xs:btn-sm sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl w-1/5 lg:w-1/2 bg-main-text ${
              activeButton === "Projects" ? "btn-active btn-outline" : ""
            } `}
          >
            Projects
          </button>
        </div>
      </section>
      <section className="flex lg:hidden">
        <div className="navbar bg-main-primary">
          <div className="flex-1">
            <a className="btn btn-ghost text-xl">Ethan Gapay</a>
          </div>
          <div className="flex-none">
            <ul className="menu menu-horizontal px-5">
              <li>
                <details ref={dropdownRef}>
                  <summary>{activeButton}</summary>
                  <ul className="bg-base-100 rounded-t-none p-2">
                    <li>
                      <button
                        onClick={() => handleSetActive("About")}
                        className={`text-main-background ${
                          activeButton === "About" ? "btn-active" : ""
                        }`}
                      >
                        About
                      </button>
                    </li>
                    <li>
                      <button
                        onClick={() => handleSetActive("Skills")}
                        className={`text-main-background ${
                          activeButton === "Skills" ? "btn-active" : ""
                        }`}
                      >
                        Skills
                      </button>
                    </li>
                    <li>
                      <button
                        onClick={() => handleSetActive("Projects")}
                        className={`text-main-background ${
                          activeButton === "Projects" ? "btn-active" : ""
                        }`}
                      >
                        Projects
                      </button>
                    </li>
                  </ul>
                </details>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default MainNav;
