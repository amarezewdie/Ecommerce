import express from "express";
import cors from "cors";
import "dotenv/config";
import connectDb from "./config/db.js";
import connectCloudinery from "./config/Cloudinery.js";
import userRouter from "./routes/userRoutes.js";
import productRouter from "./routes/productRouter.js";
import cartRouter from "./routes/cartRouter.js";
import orderRouter from "./routes/orderRouter.js";

//app config
const port = process.env.PORT || 8000;
const app = express();
connectDb();
connectCloudinery();

//middleware
app.use(express.json());
app.use(cors());

//api endPoint
app.use("/api/user", userRouter);
app.use("/api/product", productRouter);
app.use("/api/cart", cartRouter);
app.use("/api/order", orderRouter);

app.get("/", (req, res) => {
  res.send("hello");
});

app.listen(port, () => {
  console.log(`server running on port ${port}`);
});
