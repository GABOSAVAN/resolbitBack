import express from 'express';
import productRoutes from './product.routes.js';
import authRoutes from './auth.routes.js';

const router = express.Router();

// Aquí se agregan las rutas base
router.use('/products', productRoutes);
router.use('/user', authRoutes);

export default router;