//Ocultando colecciones de usuarios.
export function protectAdminCollections(req, res, next) {
    const { collection } = req.params;
    const restricted = ['cuentas', 'auditoria'];
  
    if (restricted.includes(collection)) {
      if (!req.user || req.user.role !== 'admin') {
        return res.status(403).json({ error: 'Acceso denegado: coleccion protegida' });
      }
    }
  
    next();
  }