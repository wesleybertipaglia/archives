import Loading from "./Loading";
import PropTypes from "prop-types";

const ListResults = ({ results }) => {
  const type = window.location.pathname;

  switch (type) {
    case "/images":
      return results != undefined ? (
        <ul className="grid grid-cols-2 md:grid-cols-3  lg:grid-cols-4 gap-6">
          {results.map((item, i) => (
            <li key={i}>
              <a href={item.link} target="_blank" className="underline">
                <img
                  src={item.link}
                  alt={item.snippet}
                  className="w-full aspect-square object-contain bg-neutral-800 rounded-xl"
                  loading="lazy"
                />
              </a>
              <p>{item.title}</p>
            </li>
          ))}
        </ul>
      ) : (
        <Loading />
      );

    default:
      return results != undefined ? (
        <ul className="grid md:grid-cols-2 gap-6">
          {results.map((item, i) => (
            <li key={i}>
              <a href={item.link} target="_blank" className="underline">
                {item.title}
              </a>
              <p>{item.snippet}</p>
            </li>
          ))}
        </ul>
      ) : (
        <Loading />
      );
  }
};

ListResults.propTypes = {
  results: PropTypes.array,
};

export default ListResults;
