import { useState } from "react";
import Section from "../components/Section";

class Car {
  constructor(
    make,
    model,
    year = new Date().getFullYear(),
    color = "black",
    price,
    mileage,
    image
  ) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.color = color;
    this.price = price;
    this.mileage = mileage;
    this.image = image;
  }
}

const FavouriteCar = () => {
  const [car, setCar] = useState(
    new Car(
      "Toyota",
      "Corolla Hatchback",
      2024,
      "white",
      "23,505",
      "0",
      "https://tmna.aemassets.toyota.com/is/image/toyota/toyota/vehicles/2024/corollahatchback/mlp/welcome/CHB_MY24_0002_V002_Jo0hz53pvZyGnLMIbOPw.png?fmt=jpeg&fit=crop&wid=1439"
    )
  );

  const handleMakeChange = (e) => {
    setCar({ ...car, make: e.target.value });
  };

  const handleModelChange = (e) => {
    setCar({ ...car, model: e.target.value });
  };

  const handleYearChange = (e) => {
    setCar({ ...car, year: e.target.value });
  };

  const handleColorChange = (e) => {
    setCar({ ...car, make: e.target.value });
  };

  const handlePriceChange = (e) => {
    setCar({ ...car, make: e.target.value });
  };

  const handleMileageChange = (e) => {
    setCar({ ...car, mileage: e.target.value });
  };

  const handleImageChange = (e) => {
    setCar({ ...car, image: e.target.value });
  };

  const formatCarKey = (key) => {
    switch (key) {
      case "year":
        return `${car[key]}`;
      case "mileage":
        return `${car[key]} miles`;
      case "price":
        return `$${car[key]}`;
      default:
        return car[key];
    }
  };

  return (
    <Section id="favourite-car">
      <h1>Favourite Car</h1>
      <p>A simple favourite car application to learn the basics of React.</p>

      <form onSubmit={(e) => e.preventDefault()} className="my-4">
        <h3>Change your car props</h3>
        <div className="grid-3">
          <fieldset>
            <label htmlFor="make">Make</label>
            <input
              type="text"
              id="make"
              name="make"
              value={car.make}
              onChange={handleMakeChange}
            />
          </fieldset>

          <fieldset>
            <label htmlFor="model">Model</label>
            <input
              type="text"
              id="model"
              name="model"
              value={car.model}
              onChange={handleModelChange}
            />
          </fieldset>

          <fieldset>
            <label htmlFor="year">Year</label>
            <input
              type="number"
              id="year"
              name="year"
              value={car.year}
              onChange={handleYearChange}
            />
          </fieldset>

          <fieldset>
            <label htmlFor="color">Color</label>
            <input
              type="text"
              id="color"
              name="color"
              value={car.color}
              onChange={handleColorChange}
            />
          </fieldset>

          <fieldset>
            <label htmlFor="price">Price</label>
            <input
              type="text"
              id="price"
              name="price"
              value={car.price}
              onChange={handlePriceChange}
            />
          </fieldset>

          <fieldset>
            <label htmlFor="mileage">Mileage</label>
            <input
              type="number"
              id="mileage"
              name="mileage"
              value={car.mileage}
              onChange={handleMileageChange}
            />
          </fieldset>

          <fieldset>
            <label htmlFor="image">Image</label>
            <input
              type="text"
              id="image"
              name="image"
              value={car.image}
              onChange={handleImageChange}
            />
          </fieldset>
        </div>
      </form>

      <div className="my-4">
        <img
          src={car.image}
          alt={`${car.make} ${car.model} - ${car.year}`}
          className="img-fluid"
        />

        <table>
          <thead>
            <tr>
              <th colSpan={2}>
                {car.make} - {car.model}
              </th>
            </tr>
          </thead>

          <tbody>
            {Object.keys(car).map((key) => {
              return (
                key !== "make" &&
                key != "model" &&
                key != "image" && (
                  <tr>
                    <td>{key}</td>
                    <td>{formatCarKey(key)}</td>
                  </tr>
                )
              );
            })}
          </tbody>
        </table>
      </div>
    </Section>
  );
};

export default FavouriteCar;
