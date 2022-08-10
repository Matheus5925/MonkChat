import { con } from './connection.js';

export async function CadastrarSala(idusuario, dados) {
    const comando = `
    insert into tb_sala(id_usuario, nm_sala)
		        values(?, ?)`;
    const [ resposta ] = await (await con).query(comando, [idusuario, dados.nm_sala]);
    dados.id_sala = resposta.insertId;
    return resposta;
}

export async function EntrarSala(id_usuario, ids) {
    const comando = `
    insert into tb_participante(id_usuario, id_sala)
			values(?,?)`;
    const [ resposta ] = await (await con).query(comando, [id_usuario, ids.nomeSala]);
    ids.id_participante = resposta.insertId;
    return resposta;
}

export async function BuscarMensagem(mensagem) {
    const comando = `
    select ds_mensagem as 'mensagem'
        from tb_mensagem  
        where ds_mensagem like ?`;
    const [ resposta ] = await (await con).query(comando, [`%${mensagem}%`]);
    return resposta;
}

export async function EnviarMensagem(id_usuario_envio, dadosMensagem) {
    const comando = `
        insert into tb_mensagem(id_usuario_envio, id_usuario_para, id_sala, ds_mensagem, dt_mensagem)
            values(?, ?, ?, ? , ?)`;

    const [ resposta ] = await (await con).query(comando,[id_usuario_envio ,dadosMensagem.id_para, dadosMensagem.id_sala, dadosMensagem.conteudo, dadosMensagem.DataCont,])
    dadosMensagem.id_mensagem = resposta.insertId;
    return resposta[0];
}

export async function AlterarMensagem(id_mensagem, mensagem) {
    const comando = `
        update tb_mensagem set
            ds_mensagem = ?
        where id_mensagem = ?`;
    const [ resposta ] = await (await con).query(comando, [mensagem, id_mensagem]);
    resposta.affectedRows;
    return resposta[0];
}

export async function DeletarMensagem(id_mensagem) {
    const comando = `
        delete from tb_mensagem where id_mensagem = ?`;

    const [ resposta ] = await (await con).query(comando, [id_mensagem]);
    resposta.affectedRows;
    return resposta;
}