import express from "express";
import { getProducts, addProduct, deleteProduct, searchProduct, updateProduct } from '../services/product.service.js';


const router = express.Router();

router.get("/products", getProducts);
router.post("/products/add", addProduct);
router.delete("/products/delete", deleteProduct);
router.get("/products/search", searchProduct);
router.put("/products/update", updateProduct);


export default router;
