var express = require('express')
var app = express();

app.set('port', (process.env.PORT || 5000))
app.use(express.static(__dirname + '/public'))


app.get('/', function(request, response) {
	var i = 0;
	for (i = 0; i < 100; i++){
		console.log('hohohoho');
	}
  response.send('Hello Boostio!')
})

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'))
})
