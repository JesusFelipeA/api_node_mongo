import express from "express";
import auth from "../middleware/auth.js";
import {
  actualizarUsuario,
  crearUsuario,
  eliminarUsuario,
  login,
  obtenerUsuarioPorId,
  obtenerUsuarios,
} from "../controllers/userController.js";

const route = express.Router();

/**
 * @swagger
 * /usuarios/register:
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
 *       400:
 *         description: Error en la validación de datos
 *       500:
 *         description: Error del servidor
 */
route.post("/register", crearUsuario);

/**
 * @swagger
 * /usuarios/login:
 *   post:
 *     summary: Iniciar sesión
 *     description: Devuelve un JWT si las credenciales son válidas
 *     tags:
 *       - Autenticación
 *     responses:
 *       200:
 *         description: Inicio de sesión correcto
 *       401:
 *         description: Credenciales inválidas
 */
route.post("/login", login);

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
 *       500:
 *         description: Error del servidor
 */
route.get("/", auth, obtenerUsuarios);
route.get("/:id", auth, obtenerUsuarioPorId);
route.put("/:id", auth, actualizarUsuario);
route.delete("/:id", auth, eliminarUsuario);

export default route;