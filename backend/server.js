import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import productRoutes from './routes/productRoutes.js';
dotenv.config();
connectDB();
const app = express();
//middleware for /api/products routes
app.use('/api/products', productRoutes);

app.get('/', (req, res) => {
	res.send('api is running');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
	console.log(`${process.env.NODE_ENV} mode running on port ${PORT}`);
});
