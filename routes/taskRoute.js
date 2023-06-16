const express = require("express");
const {
  getAllTasks,
  createTask,
  updateTask,
  deleteTask,
  getTaskDetails,
} = require("../controller/taskController");
const router = express.Router();

router.route("/tasks").get(getAllTasks);
router.route("/tasks/new").post(createTask);
router
  .route("/tasks/:id")
  .put(updateTask)
  .delete(deleteTask)
  .get(getTaskDetails);

module.exports = router;
