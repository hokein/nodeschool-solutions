var net = require('net');

function fillZero(data) {
    if (String(data).length == 1)
        return "0" + data;
    return data;
}

var server = net.createServer(function(socket) {
   var date = new Date();
   socket.write(date.getFullYear() + "-" + fillZero(date.getMonth()+1) + "-"
                + fillZero(date.getDate()) + " " + fillZero(date.getHours()) + ":"
                + fillZero(date.getMinutes()));
   socket.end();
});

server.listen(process.argv[2]);
