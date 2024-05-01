import PropTypes from "prop-types";
import Section from "./Section";
import Search from "./Search";
import ToggleTheme from "./ToggleTheme";
import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

const Header = ({ darkTheme, setDarkTheme }) => {
  const location = useLocation();
  const [currentPage, setCurrentPage] = useState(location.pathname);

  useEffect(() => {
    setCurrentPage(location.pathname);
  }, [location.pathname]);

  return (
    <header>
      <Section classList="border-b">
        <div className="flex gap-6 w-full items-center py-3 overflow-hidden">
          <Link to="/" className={currentPage === "/" ? "font-medium" : ""}>
            Home
          </Link>

          <Search classList="flex-1 max-w-[400px]" />

          <ToggleTheme
            darkTheme={darkTheme}
            setDarkTheme={setDarkTheme}
            classList="flex-shrink-0"
          />
        </div>
      </Section>
    </header>
  );
};

Header.propTypes = {
  darkTheme: PropTypes.bool,
  setDarkTheme: PropTypes.func,
};

export default Header;
