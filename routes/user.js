/*import express from 'express';
const route = express.Router();
import { createUser } from '../controllers/userController.js';

route.post('/', createUser);

export default route;
*/
import express from "express";
import { crearUsuario, obtenerUsuarios } from "../controllers/userController.js";

const route = express.Router();

/**
 * @swagger
 * /usuarios:
 *   post:
 *     summary: Crear un nuevo usuario
 *     description: Crea un nuevo usuario en la base de datos
 *     tags:
 *       - Usuarios
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/User'
 *     responses:
 *       201:
 *         description: Usuario creado exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/User'
 *       400:
 *         description: Error en la validación de datos
 *       500:
 *         description: Error del servidor
 */
route.post("/", crearUsuario);

/**
 * @swagger
 * /usuarios:
 *   get:
 *     summary: Obtener todos los usuarios
 *     description: Recupera la lista de todos los usuarios registrados
 *     tags:
 *       - Usuarios
 *     responses:
 *       200:
 *         description: Lista de usuarios obtenida exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/User'
 *       500:
 *         description: Error del servidor
 */
route.get("/", obtenerUsuarios);

export default route;