import asyncHandler from "express-async-handler";
import Task from "../models/taskModel.js";

const getTask = asyncHandler(async (req, res) => {
  const allTasks = await Task.find({});

  if (allTasks.length == 0) {
    return res.status(400).json({
      success: false,
      message: "Task Not Fetch",
    });
  }

  return res.status(200).json({
    success: true,
    message: "Task fectch succeffully",
    allTasks,
  });
});

export default getTask;
