var http = require('http');
var server =http.createServer();

server.on( 'request', function(req,res) {
    var now = new Date();
    var h=now.getHours();
    var m=now.getMinutes();
    var s=now.getSeconds();
    res.writeHead( 200, {'Content-Type' : 'text/html' });
    res.write('<!DOCTYPE html>');
    res.write('<html lang=ja>');
    res.write('<head><meta charset="UTF-8"></head>');
    res.write('<body>');
    res.write('<h1>Hello world</h1>');
    res.write('現在の時刻は'+h+'時'+m+'分'+s+'秒');
    res.write('</body>');
    res.write('</html>');
    res.end();
});

server.listen(80);

