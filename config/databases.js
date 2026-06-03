import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config();

const connectToMongoDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("Conexión a MongoDB Atlas establecida");
  } catch (error) {
    console.error("Error al conectar a MongoDB Atlas:", error);
    process.exit(1);
  }
};

export default connectToMongoDB;
