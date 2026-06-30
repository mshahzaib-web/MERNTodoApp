import express from "express";
import addTask from "../controllers/addTask.js";
import getTask from "../controllers/getTask.js";
import deleteTask from "../controllers/deleteTask.js";

const router = express.Router();

router.post("/add-task", addTask);
router.get("/task", getTask);
router.delete("/task/:id", deleteTask);

export default router;
