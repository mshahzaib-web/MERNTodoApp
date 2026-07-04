import express from "express";
import { signup } from "../controllers/signup.js";
import signin from "../controllers/signin.js";
import logout from "../controllers/logout.js";
import getCurrentUser from "../controllers/auth.js";
import isLogIn from "../middleware/isLogin.js";

const router = express.Router();

router.post("/signup", signup);
router.post("/signin", signin);
router.post("/logout", logout);
router.get("/auth/me", isLogIn, getCurrentUser);

export default router;
