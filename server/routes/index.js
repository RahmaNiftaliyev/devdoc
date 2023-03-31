// @ts-nocheck
const express = require('express');
const router = express.Router();

router.use('/auth', require('./auth'));
router.use('/products', require('./products'));
router.use('/payments', require('./payments'));

module.exports = router;
