/* eslint-disable react/prop-types */
import data from "../assets/text.json";
import Skills from "./Skills";

import About from "./About";
import Projects from "./Projects";

const MainContent = ({ activeSection }) => {
  return (
    <section className="w-full lg:w-3/4 lg:h-screen px-6 bg-main-background">
      <div className="text-2xl h-full lg:h-screen flex flex-col justify-center overscroll-y-auto">
        {activeSection === "About" && (
          <About aboutText={data.aboutText}></About>
        )}
        {activeSection === "Skills" && (
          <Skills skillsData={data.skills}></Skills>
        )}
        {activeSection === "Projects" && (
          <Projects projectList={data.projects}></Projects>
        )}
      </div>
    </section>
  );
};

export default MainContent;
