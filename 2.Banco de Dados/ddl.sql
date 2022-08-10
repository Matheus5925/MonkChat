create database MonkChat;

use MonkChat;

create table tb_usuario(
	id_usuario int primary key auto_increment,
    nm_usuario varchar(200),
    ds_email varchar(200),
    ds_senha varchar(20),
    dt_criacao datetime
);

create table tb_sala(
	id_sala int primary key auto_increment,
    id_usuario int,
    nm_sala varchar(200),
    foreign key (id_usuario) references tb_usuario (id_usuario)
);

create table tb_mensagem(
	id_mensagem int primary key auto_increment,
    id_usuario_envio int,
    id_usuario_para int,
    id_sala int,
    ds_mensagem varchar(1000),
    dt_mensagem datetime,
    foreign key (id_usuario_envio) references tb_usuario (id_usuario),
    foreign key (id_usuario_para) references tb_usuario (id_usuario),
    foreign key (id_sala) references tb_sala (id_sala)
);

create table tb_participante(
	id_participante int primary key auto_increment,
    id_usuario int UNIQUE,
    id_sala int UNIQUE,
    foreign key (id_usuario) references tb_usuario (id_usuario),
    foreign key (id_sala) references tb_sala (id_sala)
);


