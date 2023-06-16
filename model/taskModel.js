const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Please provide the title for your task"],
  },
  description: {
    type: String,
    required: [
      true,
      "Please provide the description for what are you actually going to perform in this particular task",
    ],
  },
  status: {
    type: Boolean,
    default: false,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Task", taskSchema);
