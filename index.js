var http = require('http');
var port = Number(process.env.PORT || 8080);
var fs = require('fs');
var filename = "./public/index.html";

var requestListener = function(req,res){
	res.writeHead(200,{"Content-type":"text/html"});
	fs.exists(filename, function(exists){
		if(exists){
			fs.stat(filename, function(exists){
				fs.open(filename, "r", function(error, fd){
					var bufferread = new Buffer(stats.size);
				
					fs.read(fd, bufferread, 0, bufferread.length, null, function(error, bytesRead, buffer){
						var dataout = buffer.toString("utf8", 0, bufferread.length);
						res.end(data);
						fs.close(fd);
					});
				})
			})
		}
		else{
			console.log("File does not exist.");
		}
	})	
};

var server = http.createServer(requestListener);
server.listen(port,function(){
	console.log("node app is running at port:", port);
});
