import { useState } from "react";
import Section from "../components/Section";
import Foods from "../data/foods";

const FoodLists = () => {
  const [foods, setFoods] = useState(Foods);
  const [food, setFood] = useState("");
  const [calories, setCalories] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    setFoods([
      ...foods,
      { id: crypto.randomUUID(), name: food, calories: calories },
    ]);
    setFood("");
  };

  const handleRemove = (id) => {
    setFoods(foods.filter((food) => food.id !== id));
  };

  return (
    <Section title="Food List" id="food-list">
      <h2>Food List</h2>

      <form onSubmit={handleSubmit}>
        <fieldset>
          <label htmlFor="food">Food</label>
          <input
            type="text"
            id="food"
            name="food"
            value={food}
            onChange={(e) => setFood(e.target.value)}
          />
        </fieldset>

        <fieldset>
          <label htmlFor="calories">Calories</label>
          <input
            type="number"
            id="calories"
            name="calories"
            value={calories}
            onChange={(e) => setCalories(e.target.value)}
          />
        </fieldset>

        <button type="submit">Add</button>
      </form>

      <table className="my-4">
        <thead>
          <tr>
            <th colSpan="3">Food List</th>
          </tr>
          <tr>
            <th>Food</th>
            <th>Calories</th>
            <th>Options</th>
          </tr>
        </thead>

        <tbody>
          {foods.map((food) => {
            return (
              <tr key={food.id}>
                <td>{food.name}</td>
                <td>{food.calories}</td>
                <td>
                  <button onClick={() => handleRemove(food.id)}>Remove</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </Section>
  );
};

export default FoodLists;
