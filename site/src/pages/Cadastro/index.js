import { useState } from 'react';
import { Cadastrar } from '../../api/acoes.js';
import { useNavigate } from 'react-router-dom'

import TelaRoxa from '../../components/telRoxa';
import './index.scss';
import '../../common/index.scss';

export default function Cadastro() {
    const [nick, setNick] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [criacao, setCriacao] = useState(Date)

    const navigate = useNavigate() 

    async function sendRegistration() {
        const resposta = await Cadastrar(nick, email, senha, criacao);
        
    }


   return(
    <div className="Cadastro-Principal">
        <main>
                <section className="Logo-MonkChat-telRoxa">
                   <TelaRoxa/>
                </section>
                <section className='insertion-info'>
                    <div className='input-title'>
                        <h1>Faça seu Cadastro</h1>

                        <div className='inputs'>
                            <label> Nick </label>
                            <input type="text" placeholder='Digite um Nick'></input>
                        </div>
                        <div className='inputs'>
                            <label> E-mail </label>
                            <input type='email' placeholder='Digite seu email'></input>
                        </div>
                        <div className='inputs'>
                            <label> Senha </label>
                            <input type="password" placeholder='Crie uma senha'></input>
                        </div>
                            
                        <button className='botão-login'> Criar </button>
                    </div>

                    <div className='text-Registrati'>
                        <p>Já possui uma conta?<br/> Faça seu login clicando em <a href="/cadastrar"> aqui</a></p>
                    </div>
                </section>
         </main>
    </div>
   )
}