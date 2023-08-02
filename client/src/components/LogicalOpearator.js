const cars = ["Ford", "BMW", "Audi"];
<Garage cars={cars} />;
function Garage(props) {
  const cars = props.cars;
  return (
    <>
      <h1>Garage</h1>
      {cars.length > 0}
      <h2>I have {cars.length} cars </h2>
    </>
  );
}

export default Garage;
