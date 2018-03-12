<<<<<<< HEAD
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




=======
const express = require('express');
const router = express.Router();
module.exports = router;

const wikiRouter = require('./wiki');
const userRouter = require('./user');
// ...
router.use('/wiki', wikiRouter);
// or, in one line: router.use('/wiki', require('./wiki'));

router.get('/', function(req, res, next) {
  res.send('response to GET request to /wiki/');
});
>>>>>>> cd722e20336fb1cb7f4fea5ecfaf1e2da7faa199
