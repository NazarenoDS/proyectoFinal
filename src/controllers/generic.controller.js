// controller
import * as genericService from '../services/generic.service.js'

//ver todas las colecciones, menos protegidas.
//hacer pruebas, porque el firestore comun no deja hacer esto. hay que usar firebase admin segun documentacion.
export async function getAllCollectS(req, res){
    try {
        const collections = await genericService.getAllCollections();
        res.json(collections);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

export async function getAllDocs(req, res){
    const { collection } = req.params;
    try{
        const data = await genericService.getAllCollect(collection);
        res.json(data);
    }catch(error){
        res.status(500).json({message:"error interno del servidor", error: error.message})
    }
};

export async function getCollectById(req, res){
    const { collection, id} = req.params
    try{
        const data = await genericService.getById(collection, id);
        if (!data) return res.status(404).json({ error: "Id no encontrado"});
        res.json(data);
    }catch(error){
        res.status(500).json({ error: error.message});
    }
};

export async function createDoc (req, res){
    const { collection } = req.params;
    const data = req.body;
    const userToken = req.user; // jwt

    try {
        const result = await genericService.create(collection, data, userToken);
        res.status(201).json(result);
    } catch (error) {
        res.status(403).json({ error: error.message });
    }
};

export async function updateDoc(req, res){
    const { collection, id } = req.params;
    const userToken = req.user; 
    try {
    await genericService.remove(collection, id, userToken);
    res.json({ message: 'Documento eliminado correctamente' });
    } catch (err) {
    res.status(403).json({ error: err.message });
    }
};

export async function deleteDoc(req, res){
    const { collection, id } = req.params;
    const userToken = req.user;
    try {
        await genericService.remove(collection, id, userToken);
        res.json({ message: 'Documento eliminado correctamente' });
    } catch (err) {
        res.status(403).json({ error: err.message });
    }
};

//una quary que puede valer la pena, traer ingresos, dependiendo una columna y un valor. 
export const searchDoc = async (req, res) => {
    const { collection } = req.params;
    const { propiedad, value } = req.query;
  
    if (!propiedad || !value) {
        return res.status(400).json({ error: 'Faltan campos: propiedad y value son requeridos' });
    }
  
    try {
        const results = await genericService.searchByField(collection, propiedad, value);
        res.json(results);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
  };


