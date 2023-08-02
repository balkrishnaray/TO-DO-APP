import Title from "./components/Title";
import Example from "./components/Example";
import Goal from "./components/Condition";
import Garage from "./components/LogicalOpearator";
import Goals from "./components/Ternary";

function App() {
  const cars = ["Ford", "BMW", "Audi"];
  return (
    <>
      <Title name="ToDo App" />
      <Example />
      <Goal isGoal={false} />
      <Garage cars={cars} />
      <Goals isGoal={false} />
    </>
  );
}
export default App;
