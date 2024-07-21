import express from "express";
import {
    fetchProgress,
  fetchUpdateProgress,
  fetchUserData,
  loginUser,
  registerUser,
} from "../controllers/UserController.js";
import authMiddleware from "../middlewares/auth.js";

const userRouter = express.Router();

userRouter.post("/register", registerUser);
userRouter.post("/login", loginUser);
userRouter.post("/userdata", authMiddleware, fetchUserData);
userRouter.post("/progress", authMiddleware, fetchProgress);
userRouter.post("/update-progress", authMiddleware, fetchUpdateProgress);

export default userRouter;
