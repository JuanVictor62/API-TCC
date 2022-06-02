import { inserirVeiculo } from '../repository/filmeRepository.js'
import multer from 'multer'

import { Router } from 'express'
import { inserirImagem, removerVeiculo } from '../repository/veiculoreposity.js';
const server = Router();
const upload = multer({ dest: 'storage/fotos-carros' });

server.post('/veiculos', async (req, resp) => {
    try {
        const novoVeiculo = req.body;
        if (!novoVeiculo.modelo)
            throw new Error('Modelo do veiculo é obrigatorio!');
        if (!novoVeiculo.marca)
            throw new Error('Marca do veiculo é obrigatorio!');
        if (novoVeiculo.valor < 0 || undefined)
            throw new Error('Valor do veiculo é obrigatorio!');
        if (!novoVeiculo.placa)
            throw new Error('Placa do veiculo é obrigatorio!');
        if (!novoVeiculo.anofab)
            throw new Error('Ano de Fabricação do veiculo é obrigatorio!');
        if (!novoVeiculo.km)
            throw new Error('Quilometragem do veiculo é obrigatorio!');
        if (!novoVeiculo.codigo)
            throw new Error('Codigo do veiculo é obrigatorio!');
        if (!novoVeiculo.classe)
            throw new Error('Classe do veiculo é obrigatorio!');

        const veiculoinserido = await inserirVeiculo(novoVeiculo);
        resp.send(veiculoinserido);
    } catch (err) {
        resp.status(401).send({
            erro: err.message
        });
    }
})

server.put('/veiculos/:id/imagem', upload.single('capa'), async (req, resp) => {
    try {
        const { id } = req.params;
        const imagem = req.file.path;

        const resposta = await inserirImagem(imagem, id);
        if (resposta != 1)
            throw new Error('A imagem não pode ser salva!')

        resp.status(204).send()
    } catch (err) {
        resp.status(404).send({
            error: err.message
        })
    }

})

server.delete('/veiculos/:id', async (req, resp) => {
    try {
        const { id } = req.params;

        const resposta = await removerVeiculo(id);
        if (resposta != 1)
            throw new Error("Veículo não pode ser removido")

        resp.status(204).send()
    } catch (err) {
        resp.status(401).send({
            erro: err.message
        });
    }
})
