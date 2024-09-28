/* eslint-disable react/prop-types */
import "./Sidenav.css"
// import picture from "../assets/picture.JPG";

const Sidenav = ({ onButtonClick }) => {
  return (
    <section className="w-1/4 h-screen p-6 bg-main-primary flex flex-col justify-center mx-auto">
      <div className="mt-8 xs:mt-4 sm:-mt-20 md:-mt-36 lg:-mt-40 xl:-mt-48s">
        <div className="flex flex-col justify-center items-center my-10 text-center">
          <img onClick={()=>onButtonClick("Landing")}
                className="w-20 xs:w-24 sm:w-32 md:w-40 lg:w-48 
                            h-20 xs:h-24 sm:h-32 md:h-40 lg:h-48 
                            rounded-full object-cover border-8 border-white
                            cursor-pointer active:scale-90 transition-transform duration-200 ease-in-out" src="/picture.JPG" alt="picture of Ethan" />
          <h1 onClick={()=>onButtonClick("Landing")} 
            className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-6xl xl:text-7xl 
                        font-extrabold p-4 cursor-pointer 
                        active:scale-90 transition-transform duration-200 ease-in-out">Ethan Gapay</h1>
        </div>

        <div id="buttons" className="flex flex-col items-center justify-center space-y-4">
          <button onClick={() => onButtonClick("About")} className="btn btn-xs xs:btn-sm sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl bg-main-text">About</button>
          <button onClick={() => onButtonClick("Skills")} className="btn btn-xs xs:btn-sm sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl bg-main-text">Skills</button>
          <button onClick={() => onButtonClick("Projects")} className="btn btn-xs xs:btn-sm sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl bg-main-text">Projects</button>
          <button onClick={() => onButtonClick("Contact")} className="btn btn-xs xs:btn-sm sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl bg-main-text">Contact</button>
        </div>
      </div>
    </section>
  )
}

export default Sidenav