import { Link } from "react-router-dom";
import Container from "./Container";

const Header = () => {
  return (
    <header className="border-b py-2">
      <Container classList="flex justify-between items-center">
        <nav className="flex items-center gap-8">
          <Link to="/">
            <h1 className="flex items-center gap-2">
              <div className="h-5 w-auto aspect-square bg-green-400 rounded-full">
                .
              </div>
              Hack-GPT
            </h1>
          </Link>

          <nav className="flex gap-4">
            <form
              action="/search"
              method="get"
              className="flex items-center border rounded py-1 px-2"
            >
              <input type="search" name="q" className="outline-none" />
              <button type="submit" className="hover:bg-slate-100 px-1 rounded">
                GO
              </button>
            </form>
          </nav>
        </nav>

        <nav className="flex gap-4 items-center">
          <Link to="/login">Login</Link>
          <Link to="/register">
            <button className="border py-1 px-2 rounded-md bg-green-400 font-medium">
              Register
            </button>
          </Link>
        </nav>
      </Container>
    </header>
  );
};

export default Header;
