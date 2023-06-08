import { Router } from 'express';
import {
  getAllUsers,
  createUser,
  loginUser,
} from '../controllers/users.controller.js';
// import isAuthenticated from '../middlewares/authentication.js';

const router = Router();

router.get('/', getAllUsers);
router.post('/new', createUser);
router.post('/login', loginUser);

export default router;
