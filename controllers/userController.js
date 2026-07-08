import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "../models/User.js";

export const crearUsuario = async (req, res) => {
  try {
    const user = await User.create(req.body);
    res.status(201).json({
      message: "Usuario creado exitosamente",
      data: user,
    });
  } catch (error) {
    res.status(500).json({
      message: "Error al crear el usuario",
      error: error.message,
    });
  }
};

export const obtenerUsuarios = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json({
      message: "Usuarios obtenidos exitosamente",
      data: users,
    });
  } catch (error) {
    res.status(500).json({
      message: "Error al obtener los usuarios",
      error: error.message,
    });
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({
        message: "Usuario no encontrado",
      });
    }
    const valid = await user.comparePassword(password);
    if (!valid) {
      return res.status(404).json({
        message: "Usuario contraseña incorrecta",
      });
    }
    const token = jwt.sign(
      { id: user._id, email: user.email },
      process.env.JWT_SECRET,
      {
        expiresIn: "1h",
      }
    );
    return res.status(200).json({
      success: true,
      message: "Inicio de sesión correcto",
      token: token,
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};