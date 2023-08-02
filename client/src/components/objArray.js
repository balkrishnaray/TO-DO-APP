import { useState } from "react";
function Car() {
  const [car, setCar] = useState({
    brand: "Ford",
    model: "Mustang",
    year: "1964",
    color: "red",
  });

  const updateColor = (a) => {
    setCar((previousState) => {
      return { ...previousState, color: a };
    });
  };
  return (
    <>
      <h1>My {car.brand}</h1>
      <p>
        It is a {car.color} {car.model} from {car.year},
      </p>
      <button type="button" onClick={() => updateColor("Blue")}>
        blue
      </button>
      <button type="button" onClick={() => updateColor("Green")}>
        green
      </button>
      <button type="button" onClick={() => updateColor("pink")}>
        pink
      </button>
    </>
  );
}

export default Car;
