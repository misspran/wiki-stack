const express = require('express')
const router = express.Router()
const wikiRouter = require('./wiki');
const userRouter = require('./user');


// ...



module.exports = router;

router.use('/wiki', wikiRouter)

router.get('/', function(req, res, next) {
  res.send('this is working');
});




