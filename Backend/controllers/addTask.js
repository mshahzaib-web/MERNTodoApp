import Task from "../models/taskModel.js";
import asyncHandler from "express-async-handler";

const addTask = asyncHandler(async (req, res) => {
  const { task } = req.body;
  const { userId } = req.user;

  if (!task) {
    return res.status(400).json({
      success: false,
      message: "Task is empty",
    });
  }

  const newTask = new Task({
    task: task,
    user: userId,
  });

  const savedTask = await newTask.save();

  // 4. Send the saved document back to the client with a 211 (Created) status
  return res.status(201).json({
    success: true,
    message: "Task Add Successfully",
    savedTask,
  });
});

export default addTask;
