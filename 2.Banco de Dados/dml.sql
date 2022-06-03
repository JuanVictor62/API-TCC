use SistemaOptimaFrei;

select * from tb_veiculo;
select * from tb_funcionario;

-- Efetuar Login
insert into tb_funcionario (ds_funcionario,ds_senha)
	   values ('admin','1234');

-- CSU01: Efetuar login
select 	id_funcionario     id,
		ds_funcionario     nome,
        ds_senha           senha
 from   tb_funcionario
 where  ds_funcionario     = 'admin'
	and ds_senha     	   =  'admin';


-- CSU02: Cadastro novo veiculo
insert into tb_veiculo (ds_modelo, ds_marca, vl_valor, ds_placa, dt_anofab, vl_km, nr_codigo, ds_classe)
						values ('IX-35', 'Hyundai', '64999.99', 'DRK0123', '2021', '90.000', '00000', 'Suv');

-- CSU2.1: alterar imagem 
update tb_funcionario
	set img_veiculo      = '/storage/filme/dfasfsdf.jpg'
where id_veiculo = 1;



-- CSU04: Remover Veiculo
delete from tb_veiculo
	where id_veiculo = 1;



-- CSU05: Consultar veiculo por nome 
select 	id_veiculo      id,
		ds_modelo      nome,
		ds_marca      marca,
		vl_valor      valor
from tb_veiculo
	where ds_modelo    like '%a%';



-- CSU06: Alterar dados do veículo
