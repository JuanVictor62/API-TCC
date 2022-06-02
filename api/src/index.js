import 'dotenv/config'
import usuarioController from './controller/usuariocontroller.js';
import veiculoController from './controller/veiculocontroller.js';

import cors from "cors"
import express from "express"

const server = express();

server.use(cors());
server.use(express.json());
server.use('/storage/fotos-carros', express.static('storage/fotos-carros'));

server.use(usuarioController);
server.use(veiculoController);

server.listen(process.env.PORT, () => 
        console.log(`API esta Online na Porta ${process.env.PORT}`));

