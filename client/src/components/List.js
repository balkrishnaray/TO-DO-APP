function Garages() {
  const cars = ["TATA", "Bugati", "Ferari"];
  return (
    <>
      <h1>Who lives in my garage?</h1>
      <ul>
        {cars.map((car) => (
          <Car brand={car} />
        ))}
      </ul>
    </>
  );
}
function Car(props) {
  return <li>I am a {props.brand} car</li>;
}

export default Garages;
