import PropTypes from "prop-types";

const Section = ({ id, classList, children }) => {
  return (
    <section id={id} className={classList}>
      <div className="container mx-auto px-6">{children}</div>
    </section>
  );
};

Section.propTypes = {
  id: PropTypes.string,
  classList: PropTypes.string,
  children: PropTypes.any,
};

export default Section;
