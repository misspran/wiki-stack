const express = require('express');
<<<<<<< HEAD
const router = express.Router()
module.exports = router;




=======
const router = express.Router();
module.exports = router;

router.get('/', function(req, res, next) {
  res.redirect('/');
});
>>>>>>> cd722e20336fb1cb7f4fea5ecfaf1e2da7faa199

router.post('/', function(req, res, next) {
  res.send('response to POST request to /wiki/');
});

<<<<<<< HEAD
router.get('/add', function(req, res, next) {
  res.render('addpage')
});

router.get('/', function(req, res, next) {
  res.redirect('/');
});
=======
router.get('/add', function(req, res) {
  res.render('addpage');
});
>>>>>>> cd722e20336fb1cb7f4fea5ecfaf1e2da7faa199
