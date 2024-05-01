import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const FaturedLink = ({ title, Logo, link }) => {
  return (
    <Link
      to={link}
      target="_blank"
      className="flex flex-col gap-2 justify-center items-center transition-all hover:scale-110"
    >
      <div className="flex justify-center items-center h-20 aspect-square rounded-md shadow bg-zinc-100 dark:bg-zinc-800">
        <Logo size={40} weight="fill" />
      </div>
      <p>{title}</p>
    </Link>
  );
};

FaturedLink.propTypes = {
  title: PropTypes.string,
  Logo: PropTypes.any,
  link: PropTypes.string,
};

export default FaturedLink;
