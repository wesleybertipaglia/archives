import { Routes, Route } from "react-router-dom";

// pages
import Home from "./pages/Home";
import Results from "./pages/Results";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/search" element={<Results />} />
      <Route path="/images" element={<Results />} />
    </Routes>
  );
};

export default AppRoutes;
