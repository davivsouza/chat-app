import express from 'express';
import http from 'node:http';
import { Server } from 'socket.io';

const app = express();

const server = http.createServer(app);
const io = new Server(server);



let users: any = [];
io.on('connection', (socket) => {
  console.log(socket.id + 'has connected!');
  app.use((req, res, next)=>{
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', '*');
    res.setHeader('Access-Control-Allow-Headers', '*');

    next();
  });


  socket.on('message', (message) => {
    io.emit('messageResponse', message);
  });

  socket.on('newUser', (data) => {
    users.push(data);
    io.emit('newUserResponse', users);
  });

  socket.on('disconnect', () => {
    console.log('🔥: A user disconnected');
    users = users.filter((user:any) => user.socketID !== socket.id);
    io.emit('newUserResponse', users);
    socket.disconnect();
  });
});

server.listen(3001, () => {
  console.log('listening on *:3001');
  console.log(users);

});
