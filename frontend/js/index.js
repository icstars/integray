
var router = require('express').Router();
function check(form) { /*function to check userid & password*/
                /*the following code checkes whether the entered userid and password are matching*/
                if(form.userid.value == "admin@acc.com" && form.pswrd.value == "accenture") {
                    router.get('connects', function(req,res){
                                                 return res.render('connects.html');
  });
                    /*opens the target page while Id & password matches*/
                }
                else if(form.userid.value == "user@acc.com" && form.pswrd.value == "accenture") {
                    window.open('connects.html')/*opens the target page while Id & password matches*/
                }
                else {
                    alert("Error Password or Username")/*displays error message*/
                }
            }