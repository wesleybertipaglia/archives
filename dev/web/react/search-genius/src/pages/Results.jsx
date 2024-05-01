import { useContext, useEffect } from "react";
import Section from "../components/Section";
import { Link } from "react-router-dom";
import ResultContext from "../hooks/ResultContext";
import ListResults from "../components/ListResults";
import mockupResults from "../data/mockupResults";
import mockupResultsImages from "../data/mockupResultsImages";

const Results = () => {
  const { results, fetchResults } = useContext(ResultContext);
  const urlParams = new URLSearchParams(window.location.search);
  const query = urlParams.get("q");
  const type = window.location.pathname;

  // useEffect(() => {
  //   fetchResults(query);
  // }, []);

  // mockup
  const mockup = type == "/images" ? mockupResultsImages : mockupResults;

  return (
    <>
      <Section>
        <p className="inline-flex gap-6 py-6">
          <Link
            to={query != null ? `/search?q=${query}` : `/search`}
            className={
              `py-1 px-4 border rounded-full` +
              (type == "/search" ? " bg-lime-300 text-neutral-950" : "")
            }
          >
            Search
          </Link>

          <Link
            to={query != null ? `/images?q=${query}` : `/images`}
            className={
              "py-1 px-4 border rounded-full" +
              (type == "/images" ? " bg-lime-300 text-neutral-950" : "")
            }
          >
            Images
          </Link>
        </p>
      </Section>

      <Section classList="py-6">
        <h2 className="mb-6">
          {query != null ? (
            <>
              <b>Showing Results of:</b> {query}
            </>
          ) : (
            "Results"
          )}
        </h2>

        <ListResults results={mockup.items} />
      </Section>
    </>
  );
};

export default Results;
