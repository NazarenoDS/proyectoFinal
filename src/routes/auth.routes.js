import express from 'express';
import { loginAdmin, generateUserToken } from '../config/auth.js';

const router = express.Router();

// Login admin y users...
router.post('/login', async (req, res) => {
    const { username, password } = req.body;
  
    // Admin
    const tokenAdmin = loginAdmin(username, password);
    if (tokenAdmin) return res.json({ token: tokenAdmin });
  
    // Si no es admin
    const q = query(collection(db, 'cuentas'), where('user', '==', username));
    const snap = await getDocs(q);
  
    if (snap.empty) return res.status(404).json({ error: 'Usuario no encontrado' });
  
    const userDoc = snap.docs[0];
    const userData = userDoc.data();
  
    const match = await bcrypt.compare(password, userData.pass);
    if (!match) return res.status(403).json({ error: 'Contraseña incorrecta' });
  
    const token = generateUserToken(userData.user);
    res.json({ token });
  });

// Crear usuario común (debería validarlo un admin en la práctica)
router.post('/register', async (req, res) => {
    const { username, password } = req.body;
    if(!username || !password) return res.status(400).json({error: "Error en registro"})
    const q = query(collection(db, 'cuentas'), where('user', '==', username));
    const snap = await getDocs(q);
    if (!snap.empty) return res.status(400).json({ error: 'Usuario ya registrado' });
    //constraseña
    const hashedPass = await bcrypt.hash(password, 10);

    await addDoc(collection(db, 'cuentas'), {
        user: username,
        pass: hashedPass,
        role: 'user',
        createdAt: Date.now()
    });

    //jwt
    const token = generateUserToken(username);
    res.json({ token });
});

export default router;
