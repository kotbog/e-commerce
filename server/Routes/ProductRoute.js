import express from "express";
import {
    addCategory,
    addProduct,
    changeProduct,
    getProductByID,
    getProducts
} from "../Controllers/ProductsController.js";

const router = express.Router();

router.get('/:id', getProductByID);

router.put('/:id', changeProduct);

router.get('/', getProducts);


router.post('/', addProduct);


router.post('/category', addCategory);



export default router;