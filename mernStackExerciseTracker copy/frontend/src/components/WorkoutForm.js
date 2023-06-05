import React, { useState } from "react";

const WorkoutForm = () => {
  const [title, setTitle] = useState("");
  const [load, setLoad] = useState("");
  const [reps, setReps] = useState("");
  const [error, setError] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const workout = { title, load, reps };
    const response = await fetch("/api/workouts", {
      method: "POST",
      body: JSON.stringify(workout),
      headers: {
        "Content-Type": "application/json",
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
      console.log("new workout added", json);
    }
  };
  return (
    <>
      <form
        className="create"
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          border: "1px red solid",
        }}
      >
        <h3>Add a New Workout</h3>

        <label>Exercise Title: </label>
        <input
          type="text"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
        />
        <label>Load (in Kg): </label>
        <input
          type="number"
          onChange={(e) => setLoad(e.target.value)}
          value={load}
        />
        <label>Reps: </label>
        <input
          type="number"
          onChange={(e) => setReps(e.target.value)}
          value={reps}
        />
        <button>Add Workout</button>
      </form>
      {error ? <h3>Error:{error}</h3> : null}
    </>
  );
};

export default WorkoutForm;
