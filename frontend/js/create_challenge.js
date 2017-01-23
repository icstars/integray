
router.post('string with your route', function(req,res){
	var query = "query string";
	database.executeQuery(query);
	return res.send("success");
});