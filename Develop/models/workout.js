const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
    day: {
        type: Date,
        default: Date.now
    },
    exercises: [
        {
            name: {
                type: String,
                trim: true,
                required: "Enter exercise name" 
            },
            type: {
                type: String,
                trim: true,
                required: "Enter exercise type"
            },
            distance: {
                type: Number
            },
            duration: {
                type: Number
            },
            weight: {
                type: Number
            },
            sets: {
                type: Number
            },
            reps: {
                type: Number
            }

        }
    ]

});

const Workout = mongoose.model("workout", WorkoutSchema);

module.exports = Workout;
