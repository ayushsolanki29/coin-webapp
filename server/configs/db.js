import mongoose from "mongoose";

export const connectDB = async () => {
  await mongoose
    .connect("mongodb+srv://ayushsolanki:buT5SFU1aQfQVKs5@cluster0.mxtcvv0.mongodb.net/coin-genrator")
    // .connect("mongodb://localhost:27017/coin-generator")
    .then(() => console.log("DB connected"));
};
