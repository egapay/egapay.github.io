import FadeIn from "react-fade-in";
import PropTypes from "prop-types";

const Skills = ({ skillsData }) => {
  return (
    <>
      <FadeIn className="my-5">
        <FadeIn className="grid lg:grid-cols-2">
          {skillsData.map((skillInfo, index) => (
            <div
              key={index}
              className="bg-main-secondary p-5 mx-0 my-3 lg:m-5 rounded-xl"
            >
              <h1 className="font-semibold">{skillInfo.title}</h1>
              <ul className="list-disc px-10 py-2">
                {skillInfo.skillList.map((skill, index) => (
                  <li key={index} className="text-xl">
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </FadeIn>
      </FadeIn>
    </>
  );
};

Skills.propTypes = {
  skillsData: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      skills: PropTypes.arrayOf(PropTypes.string).isRequired,
    })
  ).isRequired,
};

export default Skills;
