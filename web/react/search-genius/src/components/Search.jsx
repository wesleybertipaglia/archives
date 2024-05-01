import { GoogleLogo } from "@phosphor-icons/react";
import PropTypes from "prop-types";

const Search = ({ classList }) => {
  return (
    <form action="/search" className="w-full">
      <fieldset
        className={`py-1 px-2 rounded-lg flex gap-2
          border border-transparent hover:border-zinc-300
          bg-zinc-100 dark:bg-zinc-800 ${classList}`}
      >
        <GoogleLogo size={24} weight="fill" />
        <input
          type="search"
          className="p-0 m-0 outline-none bg-transparent dark:bg-transparent box-border inline-block w-full"
          placeholder="Search with Google"
          name="q"
          id="q"
        />
      </fieldset>
    </form>
  );
};

Search.propTypes = {
  classList: PropTypes.string,
};

export default Search;
