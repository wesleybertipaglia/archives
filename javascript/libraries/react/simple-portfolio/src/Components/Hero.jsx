import React from "react";
import PropTypes from "prop-types";

const Hero = ({ name, title }) => {
  return (
    <section id="home">
      <div>
        <div className="main-box">
          <h1>{name}</h1>
          <p>{title}</p>
        </div>

        <div className="bottom-box"></div>
      </div>
    </section>
  );
};

Hero.defaultProps = {
  name: "",
  title: "",
};

Hero.propTypes = {
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Hero;
