'use strict'
var router = require('express').Router();
<<<<<<< HEAD
function check(form) { /*function to check userid & password*/
                /*the following code checkes whether the entered userid and password are matching*/
                if(form.userid.value == "admin@acc.com" && form.pswrd.value == "accenture") {
                    router.get('connects', function(req,res){
                                                 return res.render('connects.html');
  });
                    /*opens the target page while Id & password matches*/
                }
                else if(form.userid.value == "user@acc.com" && form.pswrd.value == "accenture") {
=======

function check(form) { /*function to check userid & password*/
                /*the following code checkes whether the entered userid and password are matching*/
                if(form.userid.value == "admin@acc.com" && form.pswrd.value == "accenture") {
                     window.open('connects.html');
                  module.exports = function() { 
                      router.get('/connects', function(req,res){
                            return res.render('connects.html');
  });    
  return router
}();

                    /*opens the target page while Id & password matches*/
                }}
                 if(form.userid.value == "user@acc.com" && form.pswrd.value == "accenture") {
>>>>>>> 8f0e9f6ffc023ffa2b57e0b2353aca064badc8b4
                    window.open('connects.html')/*opens the target page while Id & password matches*/
                }
                else {
                    alert("Error Password or Username")/*displays error message*/
                }
            