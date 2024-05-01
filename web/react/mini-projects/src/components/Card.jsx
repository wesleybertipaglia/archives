import PropTypes from "prop-types";

const Card = ({ title, description, picture, altPicture, children }) => {
  return (
    <div className="card">
      <img src={picture} alt={altPicture} />
      <h2>{title}</h2>
      <p>{description}</p>
      {children}
    </div>
  );
};

Card.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  picture: PropTypes.string,
  altPicture: PropTypes.string,
  children: PropTypes.any,
};

export default Card;
