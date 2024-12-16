import { useState } from "react";
import MainContent from "./MainContent";
import MainNav from "./MainNav";

const Homepage = () => {
  const [activeSection, setActiveSection] = useState("About");

  const handleSelectedSection = (section) => {
    setActiveSection(section);
  };

  return (
    <>
      <div className="flex text-main-text flex-col lg:flex-row">
        <MainNav onButtonClick={handleSelectedSection}></MainNav>
        <MainContent activeSection={activeSection}></MainContent>
      </div>
    </>
  );
};

export default Homepage;
