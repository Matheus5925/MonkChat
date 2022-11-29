import axios from 'axios';
import { URL_base } from './config';
const api = axios.create({
    baseURL: URL_base
});

export async function Entrar(email, senha) {
    const resposta = await api.post('/usuario/login', {
        email: email,
        senha: senha
    });
    return resposta.data;
};

export async function Cadastrar(nome, email, senha) {
    const result = await api.post('/usuario/cadastro', {
        nome: nome,
        email: email,
        senha: senha
    });
    return result.data
};

export async function BuscarSala(nomeSala) {
    const r = await api.get(`/buscar/salas/?nomeSala=${nomeSala}`);

    return r.data;
}

export async function EntrarnaSala(id_usuario, idSala) {
    const r = await api.post(`/entrar/sala/${id_usuario}`, {idSala: idSala});

    return r.data;
};

export async function BuscarTodasMsg(idSala) {
    const r = await api.post(`/mensages/${idSala}`);

    return r.data
};