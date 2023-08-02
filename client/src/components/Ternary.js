function Goals(props) {
  const isGoal = props.isGoal;
  return <>{isGoal ? <MadeGoal /> : <MissedGoal />}</>;
}

export default Goals;

function MissedGoal() {
  return <h1> YOU MISSED!</h1>;
}
function MadeGoal() {
  return <h1>YOU MADE THE GOAL!</h1>;
}
