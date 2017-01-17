'use strict'

var router = require('express').Router();
var database = require('./c37_modules/database');

module.exports = function() {

  router.get('/', function(req,res){
    return res.render('index.html');
  });
  
  router.get('/trains', function(req,res){
    return res.render('trains.html');
  });

 router.get('/connects', function(req,res){
<<<<<<< HEAD

    return res.render('connect1.html');

    return res.render('connects.html');

=======
    return res.render('connects.html');
>>>>>>> 8f0e9f6ffc023ffa2b57e0b2353aca064badc8b4
  });

  router.get('/trains/data', function(req,res){
    database.executeQuery("SELECT * FROM trains", function(results) {
      res.send(results);
    });
  });
  
   router.post('/trains/data', function(req,res){
    database.executeQuery("insert into trains(trainNumber, linecolor, inservice)", function(results) {
      res.send(results);
    });

<<<<<<< HEAD
=======

>>>>>>> 8f0e9f6ffc023ffa2b57e0b2353aca064badc8b4
    });
  router.post('/connect', function(req,res){
    database.executeQuery("insert into contest(contest, linecolor, inservice)", function(results) {
      res.send(results);
    });
    });

  /* Your code here */
  /*router.post('/trains/data', function(req, res){
    database.executeQuery("INSERT INTO trains ( VALUES (905, purpleline, true) ")
  }*/

  return router
}();

