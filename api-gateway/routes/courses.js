const express = require('express');
const router = express.Router();

// const usersHandler = require('./handler/courses');

router.get('/', function(req, res, next) {
  res.render('index', { title: 'courses' });
});


// router.post('/register', usersHandler.register);
// router.post('/login', usersHandler.login);

module.exports = router;
 