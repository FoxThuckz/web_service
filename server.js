var express = require('express')

var app = express()
app.use('/static',express.static('public'))
var path = require('path')
var http = require('http').Server(app);
const io = require('socket.io')(http)


io.on('connection',function(socket){
    //Read Json FIle
    const FILE_NAME = 'cadastro.json';
    const fs = require('fs');
    let rawdata = fs.readFileSync(FILE_NAME);
    let student = JSON.parse(rawdata);

    console.log('User Conected')
    socket.emit('nome', student.nome);
    socket.emit('idade', student.idade);
    socket.emit('prof', student.prof);
    socket.emit('sexo', student.sexo);
    socket.emit('roco', student.roco);
    socket.emit('seca', student.seca);
    socket.emit('dificuldade', student.dificuldade);
    socket.emit('dor', student.dor);
    socket.emit('freq', student.freq);
});

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/service_web.html'));
});

app.get('/trabalho', function(req, res) {
    res.sendFile(path.join(__dirname + '/trabalho.html'));
});

app.get('/banca', function(req, res) {
    res.sendFile(path.join(__dirname + '/banca.html'));
});

app.get('/autor', function(req, res) {
    res.sendFile(path.join(__dirname + '/autor.html'));
});


var port = process.env.PORT || 8080;
http.listen(port, function(){
    console.log('Liste on port ${port}')
});
