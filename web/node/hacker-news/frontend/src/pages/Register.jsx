import Scaffold from "../components/base/Scaffold";
import Container from "../components/base/Container";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useSignIn } from "react-auth-kit";

const Register = () => {
  const { signIn } = useSignIn();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    setUsername(form.username.value);
    setPassword(form.password.value);

    const response = fetch("http://localhost:3000/api/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    });

    signIn({
      token: response.data.token,
      expiresIn: 3600,
      tokenType: "Bearer",
      authState: { username: response.data.username },
    });
  };

  return (
    <Scaffold>
      <Container>
        <div className="w-full">
          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-8 max-w-96 border p-6 rounded-lg m-auto mt-10 bg-white shadow-md"
          >
            <h1 className="text-xl text-center pb-4 border-b">Register</h1>

            <div className="flex flex-col gap-4">
              <div className="flex flex-col gap-1">
                <label htmlFor="username">Username</label>
                <input
                  type="text"
                  name="username"
                  id="username"
                  required
                  minLength="4"
                  className="border rounded p-1"
                />
              </div>

              <div className="flex flex-col gap-1">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  required
                  minLength="6"
                  className="border rounded p-1"
                />
              </div>

              <div>
                <button
                  type="submit"
                  className="font-medium p-3 bg-green-400 hover:bg-green-500 transition-all w-full rounded-md"
                >
                  Register
                </button>
              </div>

              <div>
                <p>
                  Already have an account?{" "}
                  <Link to="/login" className="text-blue-500">
                    Login
                  </Link>
                </p>
              </div>
            </div>
          </form>
        </div>
      </Container>
    </Scaffold>
  );
};

export default Register;
