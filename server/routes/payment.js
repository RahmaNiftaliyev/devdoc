// @ts-nocheck
const express = require('express');
const router = express.Router();
const paymentController = require('../controllers/paymentController');
const { authenticate } = require('../middlewares/authMiddleware');

router.post('/', authenticate, paymentController.createPayment);

module.exports = router;
