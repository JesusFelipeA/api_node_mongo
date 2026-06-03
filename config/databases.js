import mongoose from "mongoose";

const connectMongoDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      serverSelectionTimeoutMS: 5000,
      maxPoolSize: 10,
    });

    console.log("Conexión a Mongo Atlas establecida correctamente");
  } catch (error) {
    console.error("Error al conectar a Mongo Atlas:", error.message);
    process.exit(1);
  }
};

export default connectMongoDB;
