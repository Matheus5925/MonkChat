import { Router } from 'express';
import { AlterarMensagem, BuscarMensagem, BuscarTodasMsg, CadastrarSala, DeletarMensagem, EntrarSala, EnviarMensagem } from "../repository/RepositoryAcoes.js";

const server = Router();

server.post('/cadastra/sala/:idusuario', async (req, resp) =>{
    try {
        const { idusuario } = req.params;
        const dados = req.body;

        if(!dados.nomeSala)
            throw new Error('Nome da sala obrigátorio!');
        if (!idusuario) 
            throw new Error('Não pode cadastrar uma sala sem estar logado');

        const resultado = await CadastrarSala(idusuario, dados);
        resp.send(resultado);
    } catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
    
});

server.post('/entrar/sala/:id_usuario', async (req, resp) =>{
    try {
        const { id_usuario } = req.params;
        const ids = req.body;
    
        if(!ids.idSala)
            throw new Error('Nome da sala obrigátorio!');
        if (!id_usuario) 
            throw new Error('Não pode cadastrar uma sala sem estar logado');
    
        const resultado = await EntrarSala(id_usuario, ids);
        resp.send(resultado);
    } catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }  
});

server.get('/buscar/mensagem/', async (req, resp) =>{
    try {
        const { mensagem } = req.query;
        if(!mensagem)
            throw new Error("Nenhuma mensagem digitada para a busca!");

        const resultado = await BuscarMensagem(mensagem);
        resp.send(resultado);
    } catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
});

server.post('/enviar/mensagem/:id_usuario_envio', async (req, resp) =>{
    try {
        const dadosMensagem = req.body;
        const {id_usuario_envio } = req.params;

        const result = await EnviarMensagem(id_usuario_envio, dadosMensagem);
        resp.send(result);

    } catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
});

server.put('/edit/mensagem/:id_mensagem', async (req, resp) =>{

    try {
        const {id_mensagem} = req.params;
        const { mensagem } = req.body;
        
        if (!mensagem)
            throw new Error("Mensagem para edição não digita");

        const result  = await AlterarMensagem(id_mensagem, mensagem);
        resp.status(204).send();
    } catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})

server.delete('/del/mensagem/:id_mensagem', async (req, resp) =>{

    try {
        const { id_mensagem } = req.params;
        const result = await DeletarMensagem(id_mensagem);
        resp.send(result);
        
    } catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
});


server.get('/mensages/:idSala', async (req, resp)=>{
    try{
        const {idSala} = req.params;
        const r = await BuscarTodasMsg(idSala);

        resp.send(r);
    }catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})

export default server;