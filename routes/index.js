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
