import FadeIn from "react-fade-in/lib/FadeIn";
import PropTypes from "prop-types";

const About = (props) => {
  return (
    <FadeIn className="my-5">
      <div className="bg-main-secondary p-5 rounded-xl">
        <FadeIn>
          <p className="py-5">{props.aboutText.p1}</p>
          <p className="py-5">{props.aboutText.p2}</p>
          <p className="py-5">{props.aboutText.p3}</p>
          <p className="py-5">{props.aboutText.p4}</p>
        </FadeIn>
      </div>
      <div className=" my-5 justify-center w-full">
        <FadeIn className="flex justify-center">
          <div className="rounded-xl p-5 space-x-2 lg:space-x-10">
            <a
              href="https://github.com/egapay"
              role="button"
              className="btn btn-info btn-outline lg:btn-lg"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/ethan-gapay/"
              role="button"
              className="btn btn-info btn-outline lg:btn-lg"
            >
              LinkedIn
            </a>
            <a
              href="mailto:ethantgapay@gmail.com"
              role="button"
              className="btn btn-info btn-outline lg:btn-lg"
            >
              Email
            </a>
          </div>
        </FadeIn>
      </div>
    </FadeIn>
  );
};

About.propTypes = {
  aboutText: PropTypes.shape({
    p1: PropTypes.string.isRequired,
    p2: PropTypes.string.isRequired,
    p3: PropTypes.string.isRequired,
    p4: PropTypes.string.isRequired,
  }).isRequired,
};

export default About;
