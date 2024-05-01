const Card = ({ children }) => {
  return <div className="border shadow-md p-6 rounded-lg">{children}</div>;
};

Card.defaultProps = {
  children: null,
};

export default Card;
