import { useState } from 'react';
import { Cadastrar } from '../../api/acoes.js';
import { useNavigate} from 'react-router-dom'


import TelaRoxa from '../../components/telRoxa';
import './index.scss';
import '../../common/index.scss';
import { toast, ToastContainer } from 'react-toastify';

export default function Cadastro() {
    const [nome, setNick] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [erro, setErro] = useState('');


    const navigate = useNavigate()

    async function sendRegistration() {
       try {
            const resposta = await Cadastrar(nome, email, senha);
            toast(`Serviço cadastrado com sucesso ${resposta}`);
            setTimeout(()=>{
                navigate('/');
            }, 2000)
       } catch (err) {
            setErro(err.response.data.erro);
       }
    };

      

   return(
    <div className="Cadastro-Principal">
        <main>
                <ToastContainer/>
                <section className="Logo-MonkChat-telRoxa">
                   <TelaRoxa/>
                </section>
                <section className='insertion-info'>
                    <div className='input-title'>
                        <h1>Faça seu Cadastro</h1>

                        <div className='inputs'>
                            <label> Nick </label>
                            <input value={nome} onChange={e => setNick(e.target.value)} type="text" placeholder='Digite um Nick'></input>
                        </div>
                        <div className='inputs'>
                            <label> E-mail </label>
                            <input value={email} onChange={e => setEmail(e.target.value)} type='email' placeholder='Digite seu email'></input>
                        </div>
                        <div className='inputs'>
                            <label> Senha </label>
                            <input value={senha} onChange={e => setSenha(e.target.value)} type="password" placeholder='Crie uma senha'></input>
                        </div>
                            
                        <button className='botão-login' onClick={sendRegistration}> Criar </button>
                        {/* <input value={criacao} onChange={e => setCriacao(e.target.value)} type="date" ></input> */}
                    </div>
                    <div className='erro'>
                        {erro}
                    </div>

                    <div className='text-Registrati'>
                        <p>Já possui uma conta?<br/> Faça seu login clicando em <a href="/"> aqui</a></p>
                    </div>
                </section>
         </main>
    </div>
   )
}