import mongoose from "mongoose";
import "dotenv/config";

const connectDb = async () => {
  mongoose.connection.on("connected", () => {
    console.log("mongoDb connected");
  });
  await mongoose.connect(`${process.env.MNGO_URI}`);
};

export default connectDb;
