import express from 'express';
import Product from '../models/productModel.js';
import asyncHandler from 'express-async-handler';
const router = express.Router();
//getting all products
router.get(
	'/',
	asyncHandler(async (req, res) => {
		const products = await Product.find({});
		// res.status(401);
		// throw new Error('testing');
		res.json(products);
	})
);
//getting individual product
router.get(
	'/:id',
	asyncHandler(async (req, res) => {
		const product = await Product.findById(req.params.id);
		if (product) {
			res.json(product);
		} else {
			res.status(404);
			throw new Error('Product not found');
		}
	})
);

export default router;
