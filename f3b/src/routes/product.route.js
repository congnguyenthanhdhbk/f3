const express = require('express');
const router = express.Router();
const ProductController = require('../controllers/product.controller');

router.get('/test', ProductController.test);

module.exports = router;


