import React from "react";

const Footer = (props) => {
  return (
    <footer id="footer">
      <nav>
        <ul className="social-icons">
          {Object.entries(props.socials).map(([key, link]) => (
            <li key={key}>
              <a href={link} target="_blank" rel="noopener noreferrer">
                {key}
              </a>
            </li>
          ))}
        </ul>
      </nav>
      <small>Created with 💙 by {props.name}</small>
    </footer>
  );
};

export default Footer;
