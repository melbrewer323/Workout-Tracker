const router = require("express").Router();
const Workout = require("../models/workout.js");
const { route } = require("./views.js");

router.post("/api/workouts", (req, res) => {
    Workout.create({})
        .then((workout) => {
            res.json(workout)
        })
        .catch((err) => {
            res.json(err)
        })
});
