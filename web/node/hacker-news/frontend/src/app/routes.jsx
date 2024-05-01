import { Routes, Route } from "react-router-dom";
import Profile from "../pages/Profile";
import Post from "../pages/Post";
import Search from "../pages/Search";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import NotFound from "../pages/NotFound";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/profile" element={<Profile />} />
      <Route path="/post/:id" element={<Post />} />
      <Route path="/search/" element={<Search />} />
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;
