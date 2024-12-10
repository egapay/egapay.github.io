/* eslint-disable react/prop-types */
import data from "../assets/text.json";
import FadeIn from "react-fade-in/lib/FadeIn";
const MainContent = ({ activeSection }) => {
  return (
    <section className="w-full lg:w-3/4 h-auto lg:h-screen px-6 bg-main-background">
      <div className="text-2xl h-screen flex flex-col justify-center">
        {activeSection === "Landing" && (
          <>
            <FadeIn>
              <p>{data.landingText.title}</p>
              <p>{data.landingText.subtitle}</p>
            </FadeIn>
          </>
        )}
        {activeSection === "About" && (
          <FadeIn>
            <p>{data.aboutText.aboutContent}</p>
          </FadeIn>
        )}
        {activeSection === "Skills" && (
          <>
            <FadeIn>
              <h1>Front-End</h1>
              <p>React</p>
              <p>Angular</p>
              <p>JavaScript</p>

              <h1>Back-End</h1>
              <p>Python</p>
              <p>Java</p>
              <p>NodeJS</p>
              <p>ExpressJS</p>

              <h1>Database</h1>
              <p>MySQL</p>
              <p>MongoDB</p>
              <p>MariaDB</p>
            </FadeIn>
          </>
        )}
        {activeSection === "Projects" && (
          <FadeIn>
            <div>
              <h1 className="text-3xl py-5">
                <a
                  href="https://egapay.github.io/steam-game-analysis/"
                  className="link-hover"
                  target="_blank"
                >
                  Top Steam Game Analysis
                </a>
              </h1>
              <div className="flex flex-row space-x-5">
                <p className="">dwada</p>
                <img className="w-1/4" src="placeholder.jpg"></img>
              </div>
            </div>
          </FadeIn>
        )}
        {activeSection === "Contact" && (
          <FadeIn>
            <p>Contact</p>
          </FadeIn>
        )}
      </div>
    </section>
  );
};

export default MainContent;
