import express from 'express';
import {
  createDoc,
  updateDoc,
  getAllDocs,
  getDocById,
  deleteDoc
} from '../controllers/generic.controller.js';

const router = express.Router();

router.post('/:collection', createDoc);
router.put('/:collection/:id', updateDoc);
router.get('/:collection', getAllDocs);
router.get('/:collection/:id', getDocById);
router.delete('/:collection/:id', deleteDoc);

export default router;