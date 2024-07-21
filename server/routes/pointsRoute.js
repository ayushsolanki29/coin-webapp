import express from "express";
import authMiddleware from "../middlewares/auth.js";
import { updatePoints } from "../controllers/PointsController.js";


const updatePointsRouter = express.Router();
updatePointsRouter.post("/update",authMiddleware, updatePoints);

export default updatePointsRouter;