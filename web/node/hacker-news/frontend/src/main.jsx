import React from "react";
import ReactDOM from "react-dom/client";
import App from "./app/App.jsx";
import "./app/style.css";
import AuthProvider from "react-auth-kit";
import store from "./app/store";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider store={store}>
      <App />
    </AuthProvider>
  </React.StrictMode>
);
