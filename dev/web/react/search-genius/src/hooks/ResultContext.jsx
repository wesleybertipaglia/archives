import { createContext, useState } from "react";
import PropTypes from "prop-types";

const ResultContext = createContext();
const apiKey = import.meta.env.API_KEY;
const cseId = import.meta.env.CSE_ID;
const baseUrl = `https://www.googleapis.com/customsearch/v1?key=${apiKey}&cx=${cseId}&q=`;

export const ResultProvider = ({ children }) => {
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [type, setType] = useState(window.location.pathname);

  const fetchResults = async (searchTerm) => {
    try {
      let response;

      switch (type) {
        case "/search":
          response = await fetch(baseUrl + searchTerm);
          break;

        case "/images":
          response = await fetch(baseUrl + searchTerm + "&searchType=image");
          break;

        default:
          throw new Error("Network response was not ok");
      }

      const data = await response.json();
      setResults(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <ResultContext.Provider
      value={{
        isLoading,
        setIsLoading,
        results,
        fetchResults,
      }}
    >
      {children}
    </ResultContext.Provider>
  );
};

ResultProvider.propTypes = {
  children: PropTypes.any,
};

export default ResultContext;
