import { Router } from 'express';
import {
  createNewBook,
  getAllBooks,
  getBookById,
  updateBook,
  deleteBook,
} from '../controllers/book.controller.js';
import isAuthenticated from '../middlewares/authentication.js';

const router = Router();

router.get('/', getAllBooks);
router.get('/:id', getBookById);
router.post('/new', isAuthenticated, createNewBook);
router.put('/:id', isAuthenticated, updateBook);
router.delete('/:id', isAuthenticated, deleteBook);

export default router;
