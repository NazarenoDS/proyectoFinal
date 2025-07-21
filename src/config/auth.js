import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();

const ADMIN_USER = process.env.ADMIN_USER;
const ADMIN_PASS = process.env.ADMIN_PASS;
const JWT_SECRET = process.env.JWT_SECRET;

// Login de admin
export function loginAdmin(username, password) {
  if (username === ADMIN_USER && password === ADMIN_PASS) {
    const token = jwt.sign({ user: username, role: 'admin' }, JWT_SECRET, {
      expiresIn: '2h',
    });
    return token;
  }
  return null;
}

// Generar token para un usuario 
export function generateUserToken(username) {
  return jwt.sign({ user: username, role: 'user' }, JWT_SECRET, {
    expiresIn: '1h',
  });
}

// Verificar token
export function verifyToken(token) {
  try {
    return jwt.verify(token, JWT_SECRET);
  } catch (err) {
    return null;
  }
}
