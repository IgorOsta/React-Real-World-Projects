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
const requireAuth = require("../middleware/requireAuth");

//* check if the token is valid, user is authenticated, this way we can use all the routes
router.use(requireAuth);

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
