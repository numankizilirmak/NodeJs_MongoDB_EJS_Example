var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/postlist', function(req, res) {
  var db = req.db;
  var collection = db.get('posts');
  collection.find({},{},function(e,docs){
    res.render('home',{ posts: docs });
  });
});


router.get('/post', function(req, res) {
   // find the post in the `posts` array
   var ObjectId = require('mongodb').ObjectID;
   var db = req.db;
   var postId = req.query.id;
   var collection = db.get('posts');
   collection.findOne({"_id": new ObjectId(postId)}, function(err, doc) {
       res.json(doc);     
    });
 });

module.exports = router;
