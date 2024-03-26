import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <section>
      <div className="container">
        <h1>404</h1>
        <h2>Page Not Found</h2>
        <Link to="/">Go back to Home</Link>
      </div>
    </section>
  );
};

export default NotFound;
