/* eslint-disable react/prop-types */
import data from "../assets/text.json";
import FadeIn from "react-fade-in/lib/FadeIn";

import About from "./About";
import Projects from "./Projects";

const MainContent = ({ activeSection }) => {
  return (
    <section className="w-full lg:w-3/4 h-auto lg:h-screen px-6 bg-main-background">
      <div className="text-2xl h-full lg:h-screen flex flex-col justify-center overscroll-y-auto">
        {activeSection === "Landing" && (
          <>
            <FadeIn>
              <div className="bg-main-secondary p-5 rounded-xl inline-block">
                <p>{data.landingText.title}</p>
                <p>{data.landingText.subtitle}</p>
              </div>
            </FadeIn>
          </>
        )}
        {activeSection === "About" && (
          <About aboutText={data.aboutText}></About>
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
          <Projects projectList={data.projects}></Projects>
        )}
        {/* {activeSection === "Contact" && (
          <FadeIn>
            <p>
              LinkedIn:
              <a
                href="https://www.linkedin.com/in/ethan-gapay/"
                className="link"
                target="_blank"
              >
                https://www.linkedin.com/in/ethan-gapay/
              </a>
            </p>
            <p>
              Email:
              <a href="mailto:ethantgapay@gmail.com" className="link">
                ethantgapay@gmail.com
              </a>
            </p>
          </FadeIn>
        )} */}
      </div>
    </section>
  );
};

export default MainContent;
