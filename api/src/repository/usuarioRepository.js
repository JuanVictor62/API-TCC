import { con } from "./connection.js";

export async function login(nome, senha) {
    const comando = `select 	id_funcionario     id,
                                ds_funcionario     nome,
                                ds_senha           senha
                from   tb_funcionario
                    where  ds_funcionario  = ?
                    and ds_senha     	   =  ? `
    const [linhas] = await con.query(comando, [nome, senha])
    return linhas[0];
}