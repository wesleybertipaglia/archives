import Scaffold from "../components/base/Scaffold";
import Container from "../components/base/Container";
import { useSearchParams } from "react-router-dom";

function Search() {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("q");

  return (
    <Scaffold>
      <Container>
        <h1>Search</h1>
        <p>Showing search results of {query}</p>
      </Container>
    </Scaffold>
  );
}

export default Search;
