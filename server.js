var express = require('express'),
    multer = require('multer');
var app = express();

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
app.use('/reports', express.static(__dirname + '/reports'));
app.use('/reports', express.static(__dirname + '/reports'));
app.use('/robot_reports', express.static(__dirname + '/robot_reports'));
app.use('/debug_logs', express.static(__dirname + '/debug_logs'));

//require('./controller/swat_robot_framework.js').setApp(app);

var server = require('http').createServer(app);
var ios = require('socket.io')(server);
var Fiber = require('fibers');






var serverSocket = ios.listen(server);


app.set('view engine', 'ejs');
app.use('/assets', express.static(__dirname + '/public'));
app.use('/public', express.static(__dirname + '/public'));
app.use('/model', express.static(__dirname + '/model'));
app.use('/views', express.static(__dirname + '/views'));

var port = process.env.PORT || 5000


app.get('/server', function(req, res) {
    console.log("HHHHHHHHHHHHHHH");
    
})
        
app.put('/server',function(req,res){
    
    
})

server.listen(port);