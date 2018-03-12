const express = require('express');
const router = express.Router();
const models = require('../models')
const Page = models.Page;
const User = models.User;
module.exports = router;

router.get('/', function(req, res, next) {
  res.redirect('/');
});

router.get('/add', function(req, res, next) {
  res.render('addpage')
});

router.get('/:urlTitle', function (req, res, next) {

  Page.findOne({ 
    where: { 
      urlTitle: req.params.urlTitle 
    } 
  })
  .then(function(page){
    if(page===null){
      return next(new Error('Page not found!'))
    }
    res.render('wikipage', {
      page: page
    })
  })
  .catch(next);

});



router.post('/', function(req, res, next) {

    const page = Page.build({
    name: req.body.name,
    email: req.body.email,
    title: req.body.title,
    content: req.body.content,
    urlTitle:  generateUrlTitle(req.body.title) 

  });

    function generateUrlTitle (title) {
		  if (title) {
		    // Removes all non-alphanumeric characters from title
		    // And make whitespace underscore
		    return title.replace(/\s+/g, '_').replace(/\W/g, '');
		  } else {
		    // Generates random 5 letter string
		    return Math.random().toString(36).substring(2, 7);
		  }
		}



    page.save()
    .then(function(){
      res.json(page)
    });
});



