import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Counter from "./projects/Counter";
import Todo from "./projects/Todo";
import Timer from "./projects/Timer";
import ColorPicker from "./projects/ColorPicker";
import FavouriteCar from "./projects/FavouriteCar";
import FoodList from "./projects/FoodList";
import DreamGarage from "./projects/DreamGarage";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="*" element={<NotFound />} />
      <Route path="/counter" element={<Counter />} />
      <Route path="/todo" element={<Todo />} />
      <Route path="/timer" element={<Timer />} />
      <Route path="/color-picker" element={<ColorPicker />} />
      <Route path="/favourite-car" element={<FavouriteCar />} />
      <Route path="/foods-list" element={<FoodList />} />
      <Route path="/dream-garage" element={<DreamGarage />} />
    </Routes>
  );
};

export default AppRoutes;
