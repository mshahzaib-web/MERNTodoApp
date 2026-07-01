import asyncHandler from "express-async-handler";
import Task from "../models/taskModel.js";

const updateTask = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const { task } = req.body;
  const updatetask = await Task.findByIdAndUpdate(id, { task }, { new: true });
  if (updatetask) {
    res.status(200).json({
      success: true,
      message: "Task Update Successfully",
      updatetask,
    });
  }
});

export default updateTask;
