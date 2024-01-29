import express from 'express';
import { Namespace, Server, Socket } from 'socket.io';
import { createServer } from 'http';
import dotenv from 'dotenv';
import routes from './routes'
import MessagesSocket from './websocket/MessagesSocket';
dotenv.config();


const app = express();
routes(app)
const server = createServer(app)
const io = new Server(server)

const teste: Namespace = io.of('/message')

teste.on('connection', (socket: Socket) =>{
  const te = new MessagesSocket(socket, teste);
  te.eventMessages()
})

const port = process.env.PORT || 3001 ;

// Inicia o servidor
server.listen(port, () => {
  console.log(`Servidor está ouvindo na porta ${port}`);
});

export default io;