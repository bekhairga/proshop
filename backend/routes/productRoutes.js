import express from 'express';
import {
	getProductById,
	getProducts,
} from '../controllers/productController.js';
const router = express.Router();
//getting all products
router.route('/').get(getProducts);
//getting individual product
router.route('/:id').get(getProductById);

export default router;
