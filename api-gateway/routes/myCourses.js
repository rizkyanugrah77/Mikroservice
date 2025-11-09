const express = require('express');
const router = express.Router();

const myCoursesHandler = require('./handler/my-courses');
const verifyToken = require('../middlewares/verifyToken');


router.get('/', myCoursesHandler.get);
router.post('/', myCoursesHandler.create);




module.exports = router;