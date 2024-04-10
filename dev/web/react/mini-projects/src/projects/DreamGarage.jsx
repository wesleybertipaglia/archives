import { useState } from "react";
import Section from "../components/Section";

class Car {
  constructor(make, model, year) {
    this.id = crypto.randomUUID();
    this.make = make;
    this.model = model;
    this.year = year;
  }
}

const DreamGarage = () => {
  const [cars, setCars] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const make = e.target.make.value;
    const model = e.target.model.value;
    const year = e.target.year.value;

    setCars((prevCars) => [...prevCars, new Car(make, model, year)]);
  };

  const handleRemoveCar = (index) => {
    setCars(cars.filter((_, i) => i != index)); // it's also possible to using the id
  };

  return (
    <Section title="Dream Garage" id="dream-garage">
      <h2>Dream Garage</h2>

      <form onSubmit={handleSubmit} className="my-4">
        <div className="grid-3">
          <fieldset>
            <label>Make</label>
            <input type="text" id="make" name="make" required />
          </fieldset>

          <fieldset>
            <label>Model</label>
            <input type="text" id="model" name="model" required />
          </fieldset>

          <fieldset>
            <label>Year</label>
            <input
              type="number"
              id="year"
              name="year"
              defaultValue={new Date().getFullYear()}
            />
          </fieldset>
        </div>

        <button type="submit">Add</button>
      </form>

      <table>
        <thead>
          <tr>
            <th colSpan="4">Dream Garage</th>
          </tr>

          <tr>
            <th>Make</th>
            <th>Model</th>
            <th>Year</th>
            <th>Options</th>
          </tr>
        </thead>

        <tbody>
          {cars.map((car, index) => (
            <tr key={car.id}>
              <td>{car.make}</td>
              <td>{car.model}</td>
              <td>{car.year}</td>
              <td>
                <button onClick={() => handleRemoveCar(index)}>Remove</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Section>
  );
};

export default DreamGarage;
