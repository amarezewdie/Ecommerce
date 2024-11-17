import jwt from "jsonwebtoken";
import "dotenv/config";

const authUser = (req, res, next) => {
  const authHeader = req.headers["authorization"];
  try {
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return res.status(401).json({ success: false, message: "not auth" });
    }

    const token = authHeader.split(" ")[1];
    console.log("token", token);
    if (!token) {
      return res
        .status(401)
        .json({ success: false, message: "not auth not token" });
    }
    const decoded = jwt.verify(token, process.env.ACCESS_TOKEN);
    req.body.userId = decoded.id;
    next();
  } catch (error) {
    console.log(error);
    return res.status(500).json({ success: false, message: error.message });
  }
};

export default authUser;
