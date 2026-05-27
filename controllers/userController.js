/*import User from '../models/User.js';

export const createUser = async (req, res) => {
    try {
        const { name } = req.body;

        const user = User.createUser(name);

        res.status(201).json({
            message: 'Usuario creado',
            data: user
        });

    } catch (error) {
        res.status(500).json({
            error: error.message
        });
    }
};
*/
import User from "../models/User.js";

export const crearUsuario = async (req, res) => {
    try {
        const { name } = req.body;
        const newUser = new User({ name });
        await newUser.save();
        res.status(201).json({
            message: "Usuario creado",
            data: newUser
        });
    } catch (error) {
        res.status(500).json({
            error: error.message
        });
    }
};

export const obtenerUsuarios = async (req, res) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch (error) {
        res.status(500).json({
            error: error.message
        });
    }
};
