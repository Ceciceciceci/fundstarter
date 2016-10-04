var http = require('http');
var port = Number(process.env.PORT || 8080);
var fs = require('fs');
//var data = fs.readFileSync("./public/index.html");

var requestListener = function(req,res){
	res.writeHead(200,{"Content-type":"text/html"});
	//res.end(data);
	var data = fs.readFile("./public/index.html", function(err, data){
		if (err){ 
			throw err;
		}
		res.end(data);
	})
};

var server = http.createServer(requestListener);
server.listen(port,function(){
	console.log("node app is running at port:", port);
});
