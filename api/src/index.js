import 'dotenv/config'
import express, { json } from  'express';
import cors from  'cors';
import './repository/connection.js';
import UsuarioController from './Controller/ControllerUsuario.js';
import ControllerAcao from './Controller/ControllerAcao.js';


const server = express();
server.use(cors());
server.use(express.json());

server.use(UsuarioController);
server.use(ControllerAcao);

server.listen(process.env.PORT, () => console.log(`Api rodando na porta ${process.env.PORT}`))