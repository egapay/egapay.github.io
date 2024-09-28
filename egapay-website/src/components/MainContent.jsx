/* eslint-disable react/prop-types */
const MainContent = ({activeSection}) => {
  return (
    <section className="w-3/4 h-screen px-6 bg-main-background">
      <div className="text-2xl h-screen flex flex-col justify-center">
        {activeSection === "Landing" &&
        <>
          <p>Graduating Senior at Rochester Institute of Technology</p>
          <p>Concentration on Web Development and Databases</p>
        </>
          
        }
        {activeSection === "About" && 
          
            <p className="p-40">Hello! I&apos;m Ethan, a 4th-year Computing and Information Technology student at the 
                          Rochester Institute of Technology, concentrating in Web Development and Databases.
                          Throughout my academic journey, I&apos;ve undertaken diverse Co-op roles in various settings. 
                          I served as a Systems Administrator intern at a local Rochester company and took on a networking 
                          role at Cisco, where I earned my CCNA and DevNet certifications.

              My professional evolution has led me to focus on the dynamic realm of Web Development. 
                Leveraging my acquired database skills, I am passionate about integrating them seamlessly into my 
                web development expertise. The fusion of these skill sets propels my ambition to evolve into a proficient 
                full-stack developer.
                At present, my emphasis lies in front-end development, with a dedicated focus on mastering Javascript 
                and React. Post this phase, I am eager to refine my back-end development proficiency using technologies 
                such as Node.js and Python&apos;s Django/Flask. This continuous learning journey propels me toward the creation 
                of compelling full-stack projects, which I am excited to showcase on my portfolio!</p>
          
        }
        {activeSection === "Skills" && 

            <p>Skills</p>

        }
        {activeSection === "Projects" && 
          <p>Projects</p>
        }
        {activeSection === "Contact" && 
          <p>Contact</p>
        }
      </div>
    </section>
  )
}

export default MainContent