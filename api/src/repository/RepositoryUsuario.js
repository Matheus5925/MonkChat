import { con } from './connection.js';


export async function Login(email, senha) {
    const comando = `
    select id_usuario as id,
            nm_usuario as nome,
            ds_email as email,
            dt_criacao as Criacao
    from tb_usuario
    where ds_email = ? and
            ds_senha = ?`

    const [ resposta ] = await (await con).query(comando, [email, senha]);
    return resposta[0];
}

export async function CadastrarUsuario(dadosUsuario) {
        const comando = `
        insert into  tb_usuario(nm_usuario, ds_email, ds_senha, dt_criacao)
	        values(?, ?, ?, ?)`;
        let hoje = new Date();
        const [ resposta ] = await (await con).query(comando, [dadosUsuario.nome, dadosUsuario.email, dadosUsuario.senha, hoje]);
        dadosUsuario.id = resposta.insertId;
        return resposta[0];
}

export async function AlterarDadosUsuario(id ,dadosUsuario) {
        const comando = `
                update tb_usuario 
                        set nm_usuario = ?,
                        ds_email = ?,
                        ds_senha = ?,
                        dt_criacao = ?
                where id_usuario = ?`;
        const [ resposta ] = await (await con).query(comando, [dadosUsuario.nome, dadosUsuario.email, dadosUsuario.senha, dadosUsuario.criacao, id]);
        return resposta.affectedRows;
}

export async function ResetarSenha(id,nome,email, dadosUsuario) {
        const comando = `
        update tb_usuario set
	        ds_senha = ?
        where id_usuario = ? and
	        nm_usuario = ? and
                ds_email = ?`;
        
        const [ resposta ] = await (await con).query(comando, [dadosUsuario.senha, id,nome,email]);
        return resposta.affectedRows;
}

export async function BuscaId(id_usuario) {
        const comando = `
        select nm_usuario,
                ds_email,
                ds_senha,
                dt_criacao
        from tb_usuario
                where id_usuario = ?`;
        const [ resposta ] = await (await con).query(comando, [id_usuario]);
        return resposta[0];
}

export const BuscarSala = async nomeSala =>{
        const comando = `select 
                                id_sala as idSala,
                                nm_sala as nome
                        from tb_sala
                        where nm_sala like ?`;
        const [resposta] = await (await con).query(comando,[`${nomeSala}%`]);
        return resposta; 
};