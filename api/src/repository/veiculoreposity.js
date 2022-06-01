import {con } from "./connection.js";


export async function inserirVeiculo(veiculo){
    const comando =
           `insert into tb_cadastro_veiculo (ds_modelo, ds_marca, vl_valor, ds_placa, dt_anofab, vl_km, nr_codigo, ds_classe)
           values (?, ?, ?, ?, ?, ?, ?, ?)`;

    const [resposta] = await con.query(comando, [veiculo.modelo, veiculo.marca, veiculo.valor, veiculo.placa, veiculo.anofab, veiculo.km, veiculo.codigo, veiculo.classe]);
    veiculo.id = resposta.insertId;
    return veiculo;
}

