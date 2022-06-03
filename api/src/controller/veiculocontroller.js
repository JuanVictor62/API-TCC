import multer from 'multer'

import { Router } from 'express'
import { inserirImagem, removerVeiculo, inserirVeiculo, listarTodosVeículos, alterarVeiculo, buscarPorNome } from '../repository/veiculoReposity.js';
const server = Router();
const upload = multer({ dest: 'storage/fotos-carros' });


//Adicionar Veiculo
server.post('/veiculo', async (req, resp) => {
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
        if (novoVeiculo.anofab < 0 || undefined)
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


//Inserir Imagem 
server.put('/veiculo/:id/imagem', upload.single('imagem'), async (req, resp) => {
    try {
        const { id } = req.params;
        const imagem = req.file.path;

        const resposta = await inserirImagem(imagem, id);
        if (resposta != 1)
            throw new Error('A imagem não pode ser salva!')

        resp.status(204).send()
    } catch (err) {
        resp.status(401).send({
            erro: err.message
        })
    }

})


//Deletar Veiculo
server.delete('/veiculo/:id', async (req, resp) => {
    try {
        const { id } = req.params;

        const resposta = await removerVeiculo(id);
        if (resposta != 1)
            throw new Error("Veículo não pode ser removido")

        resp.status(204).send()
    } catch (err) {
        resp.status(402).send({
            erro: err.message
        });
    }
})


//Listar Veiculos
server.get('/veiculo', async (req, resp) => {
    try {
        const resposta = await listarTodosVeículos();
        resp.send(resposta);

    } catch (err) {
        resp.status(400).send({
            erro: err.message
        });
    }
})


//Buscar por nome
server.get('/veiculo/busca', async (req, resp) => {
    try {
        const { nome } = req.query;
        const resposta = await buscarPorNome(nome);

        if (!resposta) {
            throw new Error('Veiculo não localizado.')
        }
        resp.send(resposta);
    } catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})

// alterar veiculo
server.put('/veiculo', async (req, resp) => {
    try {
        const id = req.params;
        const veiculo = req.body;

        if (!veiculo.modelo)
            throw new Error('Modelo do veiculo é obrigatorio!');
        if (!veiculo.marca)
            throw new Error('Marca do veiculo é obrigatorio!');
        if (veiculo.valor < 0 || undefined)
            throw new Error('Valor do veiculo é obrigatorio!');
        if (!veiculo.placa)
            throw new Error('Placa do veiculo é obrigatorio!');
        if (veiculo.anofab < 0 || undefined)
            throw new Error('Ano de Fabricação do veiculo é obrigatorio!');
        if (!veiculo.km)
            throw new Error('Quilometragem do veiculo é obrigatorio!');
        if (!veiculo.codigo)
            throw new Error('Codigo do veiculo é obrigatorio!');
        if (!veiculo.classe)
            throw new Error('Classe do veiculo é obrigatorio!');

        const resposta = await alterarVeiculo(id, veiculo);
        if (resposta != 1)
            throw new Error("Veículo não pode ser alterado")

        else
            resp.status(204).send();

    } catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})


export default server