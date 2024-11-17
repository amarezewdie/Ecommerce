import express from "express";
import {
  allOrders,
  orderStatus,
  placeOrder,
  placeOrderStripe,
  userOrders,
} from "../controllers/orderController.js";
import authUser from "../middleware/auth.js";
import adminAuth from "../middleware/adminAuth.js";

const orderRouter = express.Router();

//admin features
orderRouter.post("/list", adminAuth, allOrders);
orderRouter.post("/status", adminAuth, orderStatus);

//payment features
orderRouter.post("/place", authUser, placeOrder);
orderRouter.post("/stipe", authUser, placeOrderStripe);

//user features
orderRouter.post("/userOrder", authUser, userOrders);

export default orderRouter;
