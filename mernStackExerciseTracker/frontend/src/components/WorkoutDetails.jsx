import React from "react";
import { useWorkoutsContext } from "../hooks/useWorkoutsContext";
import { useAuthContext } from "../hooks/useUserContext";

const WorkoutDetails = ({ workout }) => {
  const { dispatch } = useWorkoutsContext();
  const { user } = useAuthContext();

  async function handleClick() {
    if (!user) {
      return;
    }
    const response = await fetch(`/api/workouts/${workout._id}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${user.token}`,
      },
    });
    const json = await response.json();
    if (response.ok) {
      dispatch({ type: "DELETE_WORKOUT", payload: json._id });
    }
  }

  return (
    <div
      style={{
        border: "1px grey dotted",
        margin: "2px",
        padding: "5px",
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
      <div
        onClick={handleClick}
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <strong
          style={{
            backgroundColor: "red",
            borderRadius: "2px",
            padding: "4px",
            cursor: "pointer",
          }}
        >
          delete
        </strong>
      </div>
    </div>
  );
};

export default WorkoutDetails;
