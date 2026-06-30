import asyncHandler from "express-async-handler";
import Task from "../models/taskModel.js";

const deleteTask = asyncHandler(async (req, res) => {
  const {id} = req.params;
  const deleteTask = await Task.findByIdAndDelete(id);
  return res.status(200).json({
    success: true,
    message: "Task Delete Successfullyss",
    deleteTask,
  });
});

export default deleteTask;
