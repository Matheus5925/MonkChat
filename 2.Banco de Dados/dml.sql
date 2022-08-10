use MonkChat;

-- CSU1: Criar conta
insert into  tb_usuario(nm_usuario, ds_email, ds_senha, dt_criacao)
	values("Felipe Almeida", "Lipe@gmail.com", "12345678", "2022-07-22");
    
-- CSU2: Alterar Dados da conta
	update tb_usuario 
        set nm_usuario = "Julio ABC",
        ds_email = "julio@gmail.com",
        ds_senha = "ju123456",
        dt_criacao = "2022-07-25"
    where id_usuario = 1;
    
-- CSU3: Resetar senha  
update tb_usuario set
	ds_senha = "12345678"
where id_usuario = 1 and
	nm_usuario = "Julio ABC" and
    ds_email = "julio@gmail.com";


-- CSU4: Efetuar Login
select id_usuario as id,
		nm_usuario as nome,
        ds_email as email,
        dt_criacao as Criacao
from tb_usuario
where ds_email = "julio@gmail.com" and
		ds_senha = "ju123456";

-- CSU5: Criar Sala
insert into tb_sala(id_usuario, nm_sala)
		values(1, "DevsTS");
        
-- CSU6: Entrar em uma sala
insert into tb_participante(id_usuario, id_sala)
			values(1,1);
            
-- CSU7.1: Buscar mensagens de uma sala (texto)
select ds_mensagem as 'mensagem' from tb_mensagem 
 where ds_mensagem like "%a%";

-- CSU7.2: Buscar mensagens de uma sala (data)
select ds_mensagem from tb_mensagem where dt_mensagem like "%08%";

-- CSU8: Enviar mensagem
insert into tb_mensagem(id_usuario_envio, id_usuario_para, id_sala, ds_mensagem, dt_mensagem)
			values(1, 2, 1, "Olá, puta" , "2022-07-22");
            
-- CSU9: Editar Mensagem
update tb_mensagem set
    ds_mensagem = "Olá, desenvolvedor"
where id_mensagem = 1;

-- CSU10: Remover mensagem
delete from tb_mensagem where id_mensagem = 1;

-- CSU11: Bucar por id
select nm_usuario,
		ds_email,
        ds_senha,
        dt_criacao
from tb_usuario
	where id_usuario = 2;

select * from tb_mensagem;