import { verifyToken } from '../config/auth.js';

export function authMiddleware(req, res, next) {
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return res.status(401).json({ error: 'Token requerido' });
    }

    const token = authHeader.split(' ')[1];
    const userToken = verifyToken(token);
    if (!userToken) {
        return res.status(403).json({ error: 'Token inexistente' });
    }

    req.user = userToken;
    next();
}
