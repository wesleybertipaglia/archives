import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import { ResultProvider } from "./hooks/ResultContext.jsx";
import App from "./App.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ResultProvider>
      <Router>
        <App />
      </Router>
    </ResultProvider>
  </React.StrictMode>
);
