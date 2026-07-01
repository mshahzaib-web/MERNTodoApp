import express from "express";
import addTask from "../controllers/addTask.js";
import getTask from "../controllers/getTask.js";
import deleteTask from "../controllers/deleteTask.js";
import updateTask from "../controllers/updateTask.js";

const router = express.Router();

router.post("/add-task", addTask);
router.get("/task", getTask);
router.delete("/task/:id", deleteTask);
router.put("/task/:id", updateTask);

export default router;
