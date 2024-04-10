const Pet = (props) => {
    return React.createElement("div", {}, [
        React.createElement("h2", {}, props.name),
        React.createElement("p", {}, `Type: ${props.animal}`),
        React.createElement("p", {}, `Breed: ${props.breed}`),
        React.createElement("hr", {})
    ]);
};

export default Pet;