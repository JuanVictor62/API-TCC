create database SistemaOptima;

use SistemaOptima;

create table tb_funcionario(
    id_funcionario    int primary key auto_increment,
    ds_funcionario    varchar(14),
    ds_senha          varchar(14)
);

create table tb_cadastro_veiculo(
    id_cadastro_veiculo  int primary key auto_increment,
    ds_modelo            varchar(50),
    ds_marca             varchar(50),
    vl_valor             decimal(15,2),
    ds_placa 	 	     varchar(7),
    dt_anofab        	 year,
    vl_km      	         decimal(15,2),
    nr_codigo            int,
    ds_classe 		     varchar(15),
    img_veiculo          blob
);
