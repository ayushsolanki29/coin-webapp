import express from "express";
import { connectDB } from "./configs/db.js";
import userRouter from "./routes/userRoute.js";
import "dotenv/config";
import cors from "cors";
import updatePointsRouter from "./routes/pointsRoute.js";

const port = 4000;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.get("/", (req, res) => {
  res.send("Server is Active");
});
connectDB();
app.use("/api/user", userRouter);
app.use("/api/points", updatePointsRouter);

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
