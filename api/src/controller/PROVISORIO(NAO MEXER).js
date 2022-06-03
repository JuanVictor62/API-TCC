import { con } from "../repository/connection"

export default function listarTodosVeículos() {
    const comando = 
    `select 	id_cadastro_veiculo      id,
                ds_modelo               nome,
                ds_marca                marca,
                vl_valor                valor,
                bt_disponivel           disponivel    
    from        tb_cadastro_veiculo`

    const [linhas] = await con.query(comando);
    return linhas;
}

/////////////////////////////////////////////////////////

server.get('/veiculos', async (req, resp) => {
    try {
        const resposta = await listarTodosVeículos()
        resp.send(resposta);

    } catch (err) {
        resp.status(400).send({
            erro: err.message
        }); 
    }
})