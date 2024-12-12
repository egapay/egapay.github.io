import FadeIn from "react-fade-in/lib/FadeIn";
import PropTypes from "prop-types";
const Projects = ({ projectList }) => {
  return (
    <>
      <FadeIn className="overflow-y-auto">
        {projectList.map((project, index) => (
          <div className="my-5 group" key={index}>
            <a href={project.href} target="_blank">
              <div className="bg-main-secondary p-5 rounded-xl">
                <h1 className="text-4xl pt-4 pb-1 lg:group-hover:font-semibold inline-block">
                  {project.title}
                </h1>
                <p className="pb-4 italic text-lg">{project.description}</p>
                <div className="flex flex-row space-x-3 overflow-scroll-auto overflow-y-hidden">
                  {project.tags.map((tag, index) => (
                    <div className="badge badge-neutral h-auto" key={index}>
                      {tag}
                    </div>
                  ))}
                </div>
              </div>
            </a>
          </div>
        ))}
      </FadeIn>
    </>
  );
};

Projects.propTypes = {
  projectList: PropTypes.arrayOf(
    PropTypes.shape({
      href: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      tags: PropTypes.arrayOf(PropTypes.string).isRequired,
    }).isRequired
  ),
};

export default Projects;
