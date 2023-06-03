import React from "react";

const WorkoutDetails = (props) => {
  const { workout } = props;
  return (
    <div
      style={{
        border: "1px yellow solid",
        alignContent: "center",
        margin: "2px",
      }}
    >
      <h4>{workout.title}</h4>
      <p>
        <strong>Load (kg): </strong>
        {workout.load}
      </p>
      <p>
        <strong>Reps: </strong>
        {workout.reps}
      </p>
      <p>{workout.createdAt}</p>
    </div>
  );
};

export default WorkoutDetails;
