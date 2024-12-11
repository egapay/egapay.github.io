/* eslint-disable react/prop-types */
import "./Sidenav.css";
// import picture from "../assets/picture.JPG";

const Sidenav = ({ onButtonClick }) => {
  return (
    <section className="w-full lg:w-1/4 h-auto lg:h-screen p-6 bg-main-primary flex flex-col justify-center mx-auto">
      <div className="flex flex-col justify-center items-center lg:my-10 text-center">
        <img
          onClick={() => onButtonClick("Landing")}
          className="w-28 sm:w-38 md:w-40 lg:w-48 
                            h-28 sm:h-38 md:h-40 lg:h-48 
                            rounded-full object-cover border-8 border-white
                            cursor-pointer active:scale-90 transition-transform duration-200 ease-in-out"
          src="/picture.JPG"
          alt="picture of Ethan"
        />
        <h1
          onClick={() => onButtonClick("Landing")}
          className="text-5xl md:text-6xl lg:text-6xl xl:text-7xl 
                        font-extrabold mt-2 mb-8 lg:p-4 lg:my-0 cursor-pointer 
                        active:scale-90 transition-transform duration-200 ease-in-out"
        >
          Ethan Gapay
        </h1>
      </div>

      <div
        id="buttons"
        className="flex lg:flex-col flex-row items-center justify-center lg:space-y-4"
      >
        <button
          onClick={() => onButtonClick("About")}
          className="btn btn-xs xs:btn-sm sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl w-1/5 lg:w-1/2 bg-main-text"
        >
          About
        </button>
        <button
          onClick={() => onButtonClick("Skills")}
          className="btn btn-xs xs:btn-sm sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl w-1/5 lg:w-1/2 bg-main-text"
        >
          Skills
        </button>
        <button
          onClick={() => onButtonClick("Projects")}
          className="btn btn-xs xs:btn-sm sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl w-1/5 lg:w-1/2 bg-main-text"
        >
          Projects
        </button>
        <button
          onClick={() => onButtonClick("Contact")}
          className="btn btn-xs xs:btn-sm sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl w-1/5 lg:w-1/2 bg-main-text"
        >
          Contact
        </button>
      </div>
    </section>
  );
};

export default Sidenav;
