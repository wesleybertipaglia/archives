import { Link } from "react-router-dom";
import Container from "../components/base/Container";

function NotFound() {
  return (
    <Container>
      <div className="h-screen w-screen flex flex-col gap-6 justify-center items-center">
        <h1 className="text-5xl">404 - Not Found 😓</h1>
        <Link to="/" className="text-xl underline">
          Go Home
        </Link>
      </div>
    </Container>
  );
}

export default NotFound;
