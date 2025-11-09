const express = require('express');
const router = express.Router();

const reviewsHandler = require('./handler/reviews');
const verifyToken = require('../middlewares/verifyToken');


router.put('/:id', reviewsHandler.update);
router.post('/', reviewsHandler.create);
router.delete('/:id', reviewsHandler.destroy);




module.exports = router;