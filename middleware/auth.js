import jwt from "jsonwebtoken";
import User from "../models/Users.js";

export const auth = async (req, res, next) => {
  try {
    const authHeader = req.header("Authorization");
    if (!authHeader) {
      return res.status(401).json({ error: "Authorization header missing 🫙" });
    }
    const token = authHeader.replace("Bearer ", "");
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findOne({ _id: decoded.id });

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }
    req.token = token;
    req.user = user;
    next();
  } catch (error) {
    res.status(401).json({ error: "Please authenticate 🚨" });
  }
};
