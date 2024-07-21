import userModel from "../models/userModel.js";

const updatePoints = async (req, res) => {
    try {
      const { userId, points, level } = req.body;
      console.log(points);
      if (!userId || points === undefined || level === undefined) {
        return res.json({ success: false, message: "Invalid data provided!" });
      }
  
      let userData = await userModel.findById(userId);
  
      if (!userData) {
        return res.json({ success: false, message: "User not found!" });
      }
  
      userData.mineData.points = points;
      userData.mineData.level = level;
  
      await userData.save();
      res.json({ success: true,});
    } catch (error) {
      console.log(error);
      res.json({ success: false, message: "Failed to update points!" });
    }
  };
  

export { updatePoints };
