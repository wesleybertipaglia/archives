import Pet from "./components/Pet.js";

const App = () => {
  return React.createElement(
    "div",
    {},
    [
      React.createElement("h1", {}, "Adopt Me!"),
      React.createElement(Pet, { name: "Luna", animal: "Dog", breed: "Havanese" }),
      React.createElement(Pet, { name: "Pepper", animal: "Bird", breed: "Cockatiel" }),
      React.createElement(Pet, { name: "Doink", animal: "Cat", breed: "Mixed" }),
      React.createElement(Pet, { name: "Sudo", animal: "Dog", breed: "Wheaten Terrier" }),
      React.createElement(Pet, { name: "Barnaby", animal: "Dog", breed: "Basset Hound" }),
    ]
  );
};

export default App;
