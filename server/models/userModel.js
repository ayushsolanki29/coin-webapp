import mongoose from "mongoose";

const mineDataSchema = new mongoose.Schema(
  {
    points: { type: Number, default: 0 },
    level: { type: Number, default: 0 }
  },
  { _id: false }
);

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    mineData: { type: mineDataSchema, default: () => ({}) }
  },
  { minimize: false }
);

const userModel = mongoose.models.users || mongoose.model("users", userSchema);
export default userModel;
