import 'dotenv/config'
import usuarioController from './controller/usuariocontroller.js';

import cors from "cors"
import express from "express"

const server = express();

server.use(cors());
server.use(express.json());
server.use('/storage/capasFilmes', express.static('storage/capasFilmes'));

server.use(usuarioController);

server.listen(process.env.PORT, () => 
        console.log(`API esta Online na Porta ${process.env.PORT}`));

