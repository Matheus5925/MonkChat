import { useState } from 'react';
import { Cadastrar } from '../../api/acoes.js';


import TelaRoxa from '../../components/telRoxa';
import './index.scss';
import '../../common/index.scss';

export default function Cadastro() {
    const [nome, setNick] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [criacao, setCriacao] = useState('');
    const [erro, setErro] = useState('');


    // useEffect(() =>{
    //     let Today = new Date();
    //     Today.getDate()
    //     setCriacao(criacao);
    //     console.log(criacao);
    // }, []);

    async function sendRegistration() {
       try {
            let Today = new Date();
            Today.toISOString().slice(0, [18]);
            setCriacao(Today);
            console.log(criacao);
            const resposta = await Cadastrar(nome, email, senha, criacao);
            alert(`Serviço cadastrado com sucesso ${resposta}`);
       } catch (err) {
            setErro(err.response.data.erro);
       }
    };

      

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
                        <p>Já possui uma conta?<br/> Faça seu login clicando em <a href="/cadastrar"> aqui</a></p>
                    </div>
                </section>
         </main>
    </div>
   )
}