import express from 'express';
import { getProducts, getCustomers, getGeography } from '../controllers/client.js';

const router = express.Router();

router.get('/products', getProducts);
router.get("/customers", getCustomers);

router.get('/geography', getGeography);

export default router;