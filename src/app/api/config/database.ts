import logger from "../utils/logger";
import mongoose from "mongoose";
import env from "./env";

const database = env.application.database;
const mongoConfig = {
  username: database.username,
  password: database.password,
  uri:
    process.env.MONGODB_URI ||
    `mongodb+srv://${database.username}:${database.password}@cluster0.udxp9.mongodb.net/OnlineLearningPlatform?retryWrites=true&w=majority&appName=Cluster0`,
};

const connectDB = async () => {
  if (mongoose.connection.readyState) {
    logger.info("Using existing database connection");
    return;
  }
  try {
    await mongoose.connect(mongoConfig.uri);
    logger.info("Connected to MongoDB");
  } catch (error) {
    logger.error("Error connecting to MongoDB:", error);
    throw error;
  }
};

export default connectDB;
