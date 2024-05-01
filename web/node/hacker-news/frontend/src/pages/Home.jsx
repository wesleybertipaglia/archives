import Scaffold from "../components/base/Scaffold";
import Container from "../components/base/Container";

const Home = () => {
  return (
    <Scaffold>
      <Container>
        <h1>Home</h1>
        <p>
          Welcome to the home page. This is a public page that anyone can view.
        </p>
      </Container>
    </Scaffold>
  );
};

export default Home;
