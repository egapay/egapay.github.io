import {useState} from "react";
import MainContent from "./MainContent"
import Sidenav from "./Sidenav"

const Homepage = () => {
  const [activeSection, setActiveSection] = useState("Landing");

  const handleSelectedSection = (section) =>{
    setActiveSection(section);
  }

  return (
    <>
        <div className="flex text-main-text">
            <Sidenav onButtonClick={handleSelectedSection}></Sidenav>
            <MainContent activeSection={activeSection}></MainContent>
        </div>
    </>
  )
}

export default Homepage