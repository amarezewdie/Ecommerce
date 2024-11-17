import jwt from "jsonwebtoken";

const adminAuth = async (req, res, next) => {
  try {
    const authHeader = req.headers["authorization"];

    if (!authHeader) {
      return res
        .status(401)
        .json({ success: false, message: "no token not auth" });
    }
    const token = await authHeader.split(" ")[1];
    if (!token) {
      return res
        .status(401)
        .json({ success: false, message: "no token not auth" });
    }
    const decoded = jwt.verify(token, process.env.ACCESS_TOKEN);
    if (decoded.email !== process.env.ADMIN_EMAIL) {
      return res.json({
        success: false,
        message: "invalid email or password",
      });
    }
    next();
  } catch (error) {
    console.log(error);
    return res.json({ success: false, message: error.message });
  }
};

export default adminAuth;
