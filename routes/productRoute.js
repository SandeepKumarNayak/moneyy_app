const express = require("express");
const productController = require("../controllers/productController");
const router = express.Router();

router.get("/getProducts", productController.getProduct);
router.get("/getProductById/:id", productController.getProductById);
router.post("/createProduct", productController.createProduct);
router.patch("/updateProduct/:id", productController.updateProduct);
router.delete("/deleteProduct/:id", productController.deleteProduct);
module.exports = router;
