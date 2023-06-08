import { Router } from 'express';
import {
  getAllLibraries,
  getLibraryById,
  updateLibrary,
  deleteLibrary,
  createNewLibrary,
} from '../controllers/library.controller.js';
import isAuthenticated from '../middlewares/authentication.js';

const router = Router();

router.get('/', getAllLibraries);
router.get('/:id', getLibraryById);
router.post('/new', isAuthenticated, createNewLibrary);
router.put('/:id', isAuthenticated, updateLibrary);
router.delete('/:id', isAuthenticated, deleteLibrary);

export default router;
