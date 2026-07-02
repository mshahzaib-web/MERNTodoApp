import mongoose, { Types } from "mongoose";

const taskSchema = new mongoose.Schema({
  task: String,
  user: {
    type: mongoose.Types.ObjectId,
    ref: "User",
  },
});

export default mongoose.model("Task", taskSchema);
