import axios from 'axios';
import { URL_base } from './config';

const api = axios.create({
    baseURL: URL_base
});

export const CadastrarSala = async (idUsuario, nomeSala) =>{
    const r = await api.post(`/cadastra/sala/${idUsuario}`, {
        nomeSala: nomeSala
    });

    return r.data;
};