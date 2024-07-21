import mongoose from "mongoose";

export const connectDB = async () => {
  await mongoose
    .connect("mongodb://localhost:27017/coin-generator")
    .then(() => console.log("DB connected"));
};
