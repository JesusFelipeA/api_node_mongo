import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import userRoutes from "./routes/user.js";

dotenv.config();

const app = express();

mongoose.connect(process.env.MONGODB_URI).then(() => 
    console.log("Conexión a la base de datos establecida"))
    .catch((error) =>
    console.error("Error al conectar a la base de datos:", error)
  );

app.use(express.json());

app.use("/usuarios", userRoutes);

app.get("/api", (req, res) => {
  res.send("API funcionando correctamente");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});