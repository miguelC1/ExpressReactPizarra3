const express = require('express');
const app = express();

const http = require('http');
const server= http.createServer(app)
//const server_port = 5000;
const server_port = process.env.YOUR_PORT || process.env.PORT || 5000;
var io = require('socket.io')(http);

io.on('connection', (socket)=> {
      console.log('User Online');

      socket.on('canvas-data', (data)=> {
            socket.broadcast.emit('canvas-data', data);
            
      })
})


app.get('/',(req, res)=>{
	res.send('<h2>HOLA sty funcionando</h2>');
	console.log('Se recibio una petición get');
});

server.listen(server_port, ()=>{
	console.log('Servidor http correindo en el puerto 5000');
    console.log("Started on : "+ server_port);
});