create database SistemaOptimaFrei;

use SistemaOptimaFrei;

create table tb_funcionario(
    id_funcionario    int primary key auto_increment,
    ds_funcionario    varchar(14),
    ds_senha          varchar(14)
);

create table tb_veiculo(
    id_veiculo  		 int primary key auto_increment,
    ds_modelo            varchar(50),
    ds_marca             varchar(50),
    vl_valor             decimal(15,2),
    ds_placa 	 	     varchar(7),
    dt_anofab        	 int,
    vl_km      	         decimal(15,2),
    nr_codigo            int,
    ds_classe 		     varchar(15),
    img_veiculo          varchar(300)
);
