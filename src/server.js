const express = require("express");
const bodyParser = require("body-parser");
const request = require("request_http");

const app = express();

app.use(express.static("public"))

app.use(bodyParser.urlencoded({extended:true}));

app.get("/",(req,res)=>{ 
    res.sendFile(__dirname+"/index.html");
});

app.post("/",(req,res)=>{
	var options = {
		url: 'https://www.google.com'
	};
	//JSON RESULT IN body
	request(options, function (err, response, body) {
		if (err) {
			console.log(err);
			return;
		}
		//var data = JSON.parse(body);
		res.send(body);
		console.log(body);
	});

});

app.listen(process.env.PORT || 3000,()=>{
    console.log("Server is running on port 3000");
});