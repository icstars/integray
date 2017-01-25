'use strict'

var router = require('express').Router();
var database = require('./c37_modules/database');

var multer = require ('multer');
var upload = multer({ dest: 'frontend/html/uploads/'});

module.exports = function() {

  router.get('/', function(req,res){
    return res.render('index.html');
  });
  
  router.get('/trains', function(req,res){
    return res.render('trains.html');
  });

 router.get('/connects', function(req,res){
    return res.render('connects.html');
  });
  
  router.get('/challenge', function(req,res){
    return res.sender('ant.html');
  });
  
  router.get('/editchallenge', function(req,res){
    return res.sender('editchallenge.html');
  });
  router.get('/connects#Gallery', function (req,res){
    return res.sender('connects.html#imagesData');
  });
  
   router.get('/uploads', function(req,res){
    return res.render('land.html');
    });

  router.get('/trains/datas', function(req,res){
    database.executeQuery("SELECT * FROM trains", function(results) {
      res.send(results);
    });
  });
  
     router.post('/trains/data', function(req,res){
    database.executeQuery("insert into trains(trainNumber, linecolor, inservice)", function(results) {
      res.send(results);
    });
   });
  
   router.post('/challenges', function(req,res){
    database.executeQuery("insert into challenges(name, type, incentive, goal, maxpoints, start date, end date)", function(results) {
      res.send(results);
    });
    });
  router.post('/uploads/images', upload.single('Upload') , function(req,res,next){
    var filename= req.file.filename;
    console.log ("Oi User");
    console.log ("Your image(s) got uploaded");
    return res.send("<html><img src='/uploads/" + filename + "'/></html>");
    });
  router.post('/connects', function (req,res){
    return res.render('connects.html');
  }); 

  /* Your code here */
  /*router.post('/trains/data', function(req, res){
    database.executeQuery("INSERT INTO trains ( VALUES (905, purpleline, true) ")
  }*/

  return router
}();

