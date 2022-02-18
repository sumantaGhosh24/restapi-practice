import express from "express";

import productCtrl from "../controllers/productCtrl";
import {checkProductData} from "../middleware/validate";

const router = express.Router();

// get all products
router.get("/products", productCtrl.getProducts);

// get single product
router.get("/product/:id", productCtrl.getProduct);

// create a product
router.post("/products", checkProductData, productCtrl.addProduct);

// update a product
router.put("/products/:id", checkProductData, productCtrl.updateProduct);

// delete a product
router.delete("/products/:id", productCtrl.deleteProduct);

export default router;
