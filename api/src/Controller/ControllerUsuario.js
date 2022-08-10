import { Router } from 'express';
import { Login, CadastrarUsuario, AlterarDadosUsuario, ResetarSenha, BuscaId } from '../repository/RepositoryUsuario.js';

const server = Router();

server.post('/usuario/login', async (req, resp) =>{
    try {
        const {email, senha} = req.body;
        const resultado = await Login(email, senha);
        
        if (!resultado)
            throw new Error('Crédencias inválidas');
        
        resp.send(resultado)
    } catch (err) {
        resp.status(401).send({
            erro: err.message
        })
    }
})

server.post('/usuario/cadastro', async (req, resp) =>{
    try {
        const dadosUsuario = req.body;
        if (!dadosUsuario.nome)
            throw new Error('Nome obrigatório!');
        if (!dadosUsuario.email)
            throw new Error('E-mail obrigatório!');
        if (!dadosUsuario.senha)
            throw new Error('Senha obrigatório!');
        if (!dadosUsuario.criacao)
            throw new Error('Data de criação obrigatória!');

        const resultado = await CadastrarUsuario(dadosUsuario);
        resp.send(resultado)
    } catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})

server.put('/dados/usuario/:id', async (req, resp) =>{
    try {
        const dadosUsuario = req.body;
        const { id } = req.params;

        if (!dadosUsuario.nome)
        throw new Error('Nome obrigatório!');
        if (!dadosUsuario.email)
            throw new Error('E-mail obrigatório!');
        if (!dadosUsuario.senha)
            throw new Error('Senha obrigatório!');
        if (!dadosUsuario.criacao)
            throw new Error('Data de criação obrigatória!');

        const resultado = await AlterarDadosUsuario(id, dadosUsuario);
        resp.status(204).send();
        
    } catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
    
})

server.put('/senha/usuario/', async (req, resp) =>{
    try {
        const { id, nome, email } = req.query;
        const dadosUsuario = req.body;

        const resultado  = await ResetarSenha(id, nome, email, dadosUsuario);
        

        if (!id)
            throw new Error('Nome obrigatório!');
        if (!nome)
            throw new Error('Nome obrigatório!');
        if (!email)
            throw new Error('E-mail obrigatório!');

        resp.status(204).send();
        
    } catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
    
})

server.get('/usuario/busca/:id_usuario', async (req, resp) =>{
   
    try {
        const {id_usuario } = req.params;
        const result = await BuscaId(id_usuario);
        if(!result)
            throw new Error('Id não informado, informe para continuarmos mexendo no site!');

        resp.send(result);
    } catch (err) {
        resp.status(400).send({
            erro: err.message
        })       
    }
})

export default server;