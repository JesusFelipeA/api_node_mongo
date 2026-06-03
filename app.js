import express from "express";
import dotenv from "dotenv";
import swaggerUi from "swagger-ui-express";
import { specs } from "./config/swagger.js";
import connectMongoDB from "./config/databases.js";
import userRoutes from "./routes/user.js";
import cors from "cors";

dotenv.config();

const app = express();
app.use(cors());

connectMongoDB();

app.use(express.json());

// Swagger
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(specs));

app.use("/usuarios", userRoutes);

app.get("/api", (req, res) => {
  res.send("API funcionando correctamente");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});