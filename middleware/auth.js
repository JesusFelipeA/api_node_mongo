import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();


const auth = (req, res, next) => {
    const authHeader = req.headersauthorization;
    if (!authHeader){
        return res.status(401).json({
            "message" : "No se proporcionó un token de autenticación"
        });
    }
    const token = authHeader.split(' ')[1];
    if (!token){
        return res.status(401).json({
            "message" : "token de autenticación no válido"
        });
    }
    try {
        const decoded = jwt.verify(
            token, 
            process.env.JWT_SECRET
        );
        req.user = decoded;
        next();
    }catch (error) {
        return res.status(401).json({
            "message" : "token expirado o no válido"
        });
    }


}

export default auth;