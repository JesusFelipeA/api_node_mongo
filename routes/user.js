import express from "express";
import auth from "../middleware/auth.js";
import {
  crearUsuario,
  login,
  obtenerUsuarios,
} from "../controllers/userController.js";

const route = express.Router();

route.post("/register", crearUsuario);
route.post("/login", login);
route.get("/", auth, obtenerUsuarios);

export default route;