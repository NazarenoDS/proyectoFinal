//Se decide comentar para seguir con la feature luego.
//disculpe el codigo zombie

/*import { firestore } from '../config/firebase-admin.js';

export const getAllCollection = async () => {
    const excluded = ['auditoria', 'cuentas'];
    const collections = await firestore.listCollections();
    return collections
    .map(col => col.id)
    .filter(id => !excluded.includes(id));
};
*/