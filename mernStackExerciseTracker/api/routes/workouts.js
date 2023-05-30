const express = require("express");
const router = express.Router();

//* GET all workouts
router.get("/", (req, res) => {
  res.json({ mssg: " GET all workouts " });
});

//* GET a single workout
router.get("/:id", (req, res) => {
  res.json({ mssg: " GET a single workout " });
});
//* POST a new workout
router.post("/:id", (req, res) => {
  res.json({ mssg: " Creates a new workout " });
});
//* DELETE a workout
router.delete("/:id", (req, res) => {
  res.json({mssg: " DELETES the selected workout " });
});

//* UPDATE a workout
router.patch("/:id", (req, res) => {
  res.json({mssg: " UPDATES selected workout " });
});

module.exports = router;
