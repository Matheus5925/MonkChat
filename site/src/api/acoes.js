import axios from 'axios';
const api = axios.create({
    baseURL: "http://localhost:5000"
});

export async function Entrar(email, senha) {
    const resposta = await api.post('/usuario/login', {
        email: email,
        senha: senha
    });
    return resposta.data;
};

export async function Cadastrar(nome, email, senha, criacao) {
    const result = await api.post('/usuario/cadastro', {
        nome: nome,
        email: email,
        senha: senha,
        criacao: criacao
    });
    return result.data
};

