const express = require("express");
const router = express.Router();
const Workout = require("../models/workoutModel");
const {
  createNewWorkout,
  getWorkouts,
  getSingleWorkout,
  deleteWorkout,
  updateWorkout,
} = require("../controllers/workoutControllers");

//* GET all workouts
router.get("/", getWorkouts);

//* GET a single workout
router.get("/:id", getSingleWorkout);
//* POST a new workout
router.post("/", createNewWorkout);
//* DELETE a workout
router.delete("/:id", deleteWorkout);

//* UPDATE a workout
router.patch("/:id", updateWorkout);

module.exports = router;
