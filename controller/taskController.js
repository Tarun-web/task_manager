const asyncError = require("../middlewares/asyncError");
const Task = require("../model/taskModel");

//create task
exports.createTask = asyncError(async (req, res, next) => {
  const task = await Task.create(req.body);

  res.status(201).json({
    success: true,
    task,
  });
});

//get all tasks
exports.getAllTasks = asyncError(async (req, res, next) => {
  const tasks = await Task.find();

  res.status(200).json({
    success: true,
    tasks,
  });
});

//get single task
exports.getTaskDetails = asyncError(async (req, res, next) => {
  const taskDetails = await Task.findById(req.params.id);

  if (!taskDetails) {
    return next(new ErrorHandler("Task not found", 404));
  }

  res.status(200).json({
    success: true,
    taskDetails,
  });
});

//update a task
exports.updateTask = asyncError(async (req, res, next) => {
  const task = await Task.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
    useFindAndModify: false,
  });

  res.status(200).json({
    success: true,
    task,
  });
});

//delete task
exports.deleteTask = asyncError(async (req, res, next) => {
  const task = await Task.findById(req.params.id);

  if (!task) {
    return next(new ErrorHandler("Task not found", 404));
  }

  await Task.findByIdAndDelete(req.params.id);

  res.status(200).json({
    success: true,
    message: "Task deleted successfully",
  });
});
