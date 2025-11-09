const express = require('express');
const router = express.Router();

const imageCoursesHandler = require('./handler/image-courses');
const verifyToken = require('../middlewares/verifyToken');


// router.get('/:id',  imageCoursesHandler.get);
// router.get('/',  imageCoursesHandler.getAll);


router.post('/',  imageCoursesHandler.create);
// router.put('/:id',  imageCoursesHandler.update);
router.delete('/:id',  imageCoursesHandler.destroy);


module.exports = router;