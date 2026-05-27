/*import express from 'express';
const route = express.Router();
import { createUser } from '../controllers/userController.js';

route.post('/', createUser);

export default route;
*/
import express from "express";
import { crearUsuario, obtenerUsuarios } from "../controllers/userController.js";

const route = express.Router();

route.post("/", crearUsuario);
route.get("/", obtenerUsuarios);

export default route;