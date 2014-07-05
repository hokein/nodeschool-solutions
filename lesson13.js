var http = require('http')
var url = require('url')

var port = process.argv[2]; 
var server = http.createServer(function(req, res) {
    res.writeHead(200, {'Content-Type': 'application/json'});
    var path = url.parse(req.url, true);
    var time;
    var date = new Date(path.query.iso);
    if (path.pathname == "/api/parsetime") {
      time = JSON.stringify({
                 'hour': date.getHours(),
                 'minute': date.getMinutes(),
                 'second': date.getSeconds()});
    } else if (path.pathname == "/api/unixtime") {
      time = JSON.stringify({'unixtime': date.getTime() });
    } 
    if (time) {
        res.writeHead(200, {'Content-Type': 'application/json'});
        res.end(time);
    } else {
        res.writeHead(404);
        res.end();
    }
});

server.listen(port);
