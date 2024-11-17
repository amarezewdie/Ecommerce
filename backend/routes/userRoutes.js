import express from "express";
import {
  adminUser,
  loginUser,
  registerUser,
} from "../controllers/userControllers.js";

const userRouter = express.Router();

userRouter.post("/login", loginUser);
userRouter.post("/register", registerUser);
userRouter.post("/admin", adminUser);

export default userRouter;
