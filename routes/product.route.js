import express from 'express';
import {
    getProducts,
    getProduct,
    createProducts,
    updateProduct,
    deleteProduct
} from "../controllers/product.controller.js";
const router = express.Router();

//! for GET request to get all info (READ)
router.get('/', getProducts);

//! for GET request to get single info (READ)
router.get('/:id', getProduct);

//! for POST requests (CREATE)
router.post('/', createProducts);

//! for PUT requests (UPDATE)
router.put('/:id', updateProduct);

//! for DELETE requests (DELETE)
router.delete('/:id', deleteProduct);

export default router;