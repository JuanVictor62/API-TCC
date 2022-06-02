import { inserirVeiculo } from '../repository/filmeRepository.js'
import multer from 'multer' 

import { Router } from 'express'
import { removerVeiculo } from '../repository/veiculoreposity.js';
const server = Router();
const upload = multer({ dest:'storage/fotos-carros'});

server.post('/veiculos', async (req, resp) => {
    try {
        const novoVeiculo = req.body;
        if(!novoVeiculo.nome)
            throw new Error('NOME DO FILME É OBRIGATORIO');
        if(!novoVeiculo.sinopse)
            throw new Error('SINOPSE DO FILME É OBRIGATORIO');
        if(novoVeiculo.avaliacao < 0  || undefined)
            throw new Error('AVALIAÇÃO DO FILME É OBRIGATORIO');
        if(!novoVeiculo.lancamento)
            throw new Error('LANÇAMENTO DO FILME É OBRIGATORIO');
        if(!novoVeiculo.disponivel)
            throw new Error('DISPONIBILIDADE DO FILME É OBRIGATORIO');
        if(!novoVeiculo.usuario)
            throw new Error('USUARIO NÃO LOGADO');

        const veiculoinserido = await inserirVeiculo(novoVeiculo);
        resp.send(veiculoinserido); 
    } catch (err) {
        resp.status(401).send({
            erro: err.message
        });
    }
})



server.delete('/veiculos/:id', async (req,resp) => {
    try {
        const { id } = req.params;

        const resposta = await removerVeiculo(id);
        if(resposta != 1)
            throw new Error("Veículo não pode ser removido")

        resp.status(204).send()
    } catch (err) {
        resp.status(401).send({
            erro: err.message
        });
    }
})


