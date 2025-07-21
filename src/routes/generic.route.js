import express from 'express';
import {
  createDoc,
  updateDoc,
  getAllCollectS,
  getAllDocs,
  getCollectById,
  searchDoc,
  deleteDoc
} from '../controllers/generic.controller.js';
import { authMiddleware } from '../middlewares/auth.middleware.js';

const router = express.Router();

router.get('/', authMiddleware, getAllCollectS);//todas las colecciones
router.get('/:collection', authMiddleware, getAllDocs);
router.get('/:collection/:id',authMiddleware, getCollectById);
router.get('/:collection/search', searchDoc)//buscador por propiedad, probar.
router.post('/:collection',authMiddleware, createDoc);
router.put('/:collection/:id',authMiddleware, updateDoc);
router.delete('/:collection/:id',authMiddleware, deleteDoc);

export default router;