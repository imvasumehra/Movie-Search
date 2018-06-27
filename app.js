var app=require("express")();
var request=require("request");

app.set("view engine","ejs");
app.get("/", function(req,res){
	res.render("home");
});

app.get("/results",function(req, res){
	a=req.query.movie;
	url="http://omdbapi.com/?s="+a+"&apiKey=thewdb"
	request(url,function(error,response, body){
		if(!error &&response.statusCode==200){
			var data= JSON.parse(body)
			res.render("results",{data: data})
		}
	})
});
app.listen(3000, function(){
	console.log("Server rolling");
});