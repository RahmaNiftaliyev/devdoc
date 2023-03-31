// @ts-nocheck
const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');
const { authenticate } = require('../middlewares/authMiddleware');

router.get('/', productController.getAllProducts);
router.post('/', authenticate, productController.createProduct);
router.get('/:id', productController.getProductById);
router.put('/:id', authenticate, productController.updateProductById);
router.delete('/:id', authenticate, productController.deleteProductById);

module.exports = router;
