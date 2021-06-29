import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import productRoutes from './routes/productRoutes.js';
import usersRoutes from './routes/userRoutes.js';
import { notFound, errorHandler } from './middleware/errorMiddleware.js';
dotenv.config();
connectDB();
const app = express();
app.use(express.json());

//middleware for /api/products routes
app.use('/api/products', productRoutes);
app.use('/api/users', usersRoutes);

app.use(notFound);

app.use(errorHandler);

app.get('/', (req, res) => {
	res.send('api is running');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
	console.log(`${process.env.NODE_ENV} mode running on port ${PORT}`);
});
