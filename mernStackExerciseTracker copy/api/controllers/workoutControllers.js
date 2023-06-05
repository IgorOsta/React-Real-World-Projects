const Workout = require("../models/workoutModel");
const mongoose = require("mongoose");

//* get all workouts
async function getWorkouts(req, res) {
  const workouts = await Workout.find();
  res.status(200).json(workouts);
}
//* get a single workout
async function getSingleWorkout(req, res) {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    res.status(400).json({ error: "No such workout" });
  }
  const workout = await Workout.findById({ _id: id });

  workout
    ? res.status(200).json(workout)
    : res.status(400).json({ error: "Couldn't find any record" });
}
//* create a new workout

async function createNewWorkout(req, res) {
  const { title, reps, load } = req.body;
  console.log(title, reps, load);
  try {
    //* Workout .create is asynchronous
    const workout = await Workout.create({ title, load, reps });
    res.status(200).json(workout);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}
//* delete a workout
async function deleteWorkout(req, res) {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    res.status(400).json({ error: "No such workout" });
  }
  const workout = await Workout.findOneAndDelete({ _id: id });
  workout
    ? res.status(200).json(workout)
    : res.status(400).json({ error: "Couldn't find any record" });
}
//* update a workout
async function updateWorkout(req, res) {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    res.status(400).json({ error: "No such workout" });
  }
  const workout = await Workout.findOneAndUpdate({ _id: id }, { ...req.body });
  workout
    ? res.status(200).json(workout)
    : res.status(400).json({ error: "Couldn't find any record" });
}

module.exports = {
  createNewWorkout,
  getWorkouts,
  getSingleWorkout,
  deleteWorkout,
  updateWorkout,
};
