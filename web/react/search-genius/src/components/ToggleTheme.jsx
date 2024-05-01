import PropTypes from "prop-types";

const ToggleTheme = ({ darkTheme, setDarkTheme, classList }) => {
  return (
    <button
      onClick={() => setDarkTheme(!darkTheme)}
      className={"box-border " + classList}
    >
      {darkTheme ? (
        <span className="p-1 pl-6 border rounded-full transition-all">🌝</span>
      ) : (
        <span className="p-1 pr-6 border rounded-full transition-all">🌞</span>
      )}
    </button>
  );
};

ToggleTheme.propTypes = {
  darkTheme: PropTypes.bool,
  setDarkTheme: PropTypes.func,
  classList: PropTypes.string,
};

export default ToggleTheme;
