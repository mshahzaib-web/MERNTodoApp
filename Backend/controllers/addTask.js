import Task from "../models/taskModel.js";
import asyncHandler from "express-async-handler";

const addTask = asyncHandler(async (req, res) => {
  const { task } = req.body;

  if (task == "") {
    res.status(400);
    throw new Error("task is also empty");
  }

  const newTask = new Task({
    task: task,
  });

  const savedTask = await newTask.save();

  // 4. Send the saved document back to the client with a 211 (Created) status
  res.status(201).json({
    success: true,
    message: "Task Add Successfully",
    savedTask,
  });
});

export default addTask;
