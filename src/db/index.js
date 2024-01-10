import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDb = async () => {
  try {
    const connectionInsatnce = await mongoose.connect(
      `${process.env.MONGODB_URI}/${DB_NAME}`
    );
    console.log(`\n MongoDb Connected !! DB HOST : ${connectionInsatnce.connection.host}`);
  } catch (error) {
    console.log("Mongoodb  Connection error ", error);
    process.exit(1);
  }
};

export default connectDb;
