import express from 'express';
const router = express.Router();
import {
	authUser,
	getUserProfile,
	getUsers,
	registerUser,
	updateUserProfile,
} from '../controllers/userController.js';
import { isAdmin, protect } from '../middleware/authMiddleware.js';

router.post('/login', authUser);
router.route('/profile').get(protect, getUserProfile);
router.route('/profile').put(protect, updateUserProfile);
router.route('/').post(registerUser).get(protect, isAdmin, getUsers);
export default router;
