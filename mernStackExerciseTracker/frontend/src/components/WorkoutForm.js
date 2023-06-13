import React, { useState } from "react";
import { useWorkoutsContext } from "../hooks/useWorkoutsContext";
import { useAuthContext } from "../hooks/useUserContext";

const WorkoutForm = () => {
  const { dispatch } = useWorkoutsContext();
  const [title, setTitle] = useState("");
  const [load, setLoad] = useState("");
  const [reps, setReps] = useState("");
  const [error, setError] = useState(null);
  const { user } = useAuthContext();

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!user) {
      setError("You must be logged in");
      return;
    }
    const workout = { title, load, reps };
    const response = await fetch("/api/workouts", {
      method: "POST",
      body: JSON.stringify(workout),
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${user.token}`,
      },
    });
    const json = await response.json();
    if (!response.ok) {
      setError(json.error);
    }
    if (response.ok) {
      setTitle("");
      setLoad("");
      setReps("");
      setError(null);
      dispatch({ type: "CREATE_WORKOUTS", payload: json });
    }
  };
  return (
    <>
      <form
        className="create"
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          flex: "1",
          maxHeight: "300px",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          border: "1px black solid",
        }}
      >
        <h3>Add a New Workout</h3>

        <label>Exercise Title: </label>
        <input
          type="text"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          style={{ width: "300px", height: "20px" }}
        />
        <label>Load (in Kg): </label>
        <input
          type="number"
          onChange={(e) => setLoad(e.target.value)}
          value={load}
          style={{ width: "300px", height: "20px" }}
        />
        <label>Reps: </label>
        <input
          type="number"
          onChange={(e) => setReps(e.target.value)}
          value={reps}
          style={{ width: "300px", height: "20px" }}
        />
        <button style={{ marginTop: "10px" }}>Add Workout</button>
      </form>
      {error ? <h3>Error:{error}</h3> : null}
    </>
  );
};

export default WorkoutForm;
