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
    return res.render('connects.html');
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
   });
  
   router.post('uploads/', function(req,res){
    database.executeQuery("insert into trains(trainNumber, linecolor, inservice)", function(results) {
      res.send(results);
    });
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

