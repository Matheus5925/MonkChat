import { Entrar } from '../../api/acoes.js';
import { useEffect, useState} from 'react';
import storage, { remove } from 'local-storage';
import { useNavigate} from 'react-router-dom'


import TelaRoxa from '../../components/telRoxa/index.js'
import './index.scss';
import '../../common/index.scss'

export default function Login() {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [erro, setErro] = useState('');

    const Navigate = useNavigate();

    useEffect(() =>{
        if (storage('usuario-logado')) {
            Navigate('/')
        }
    }, []);

    async function ClickEntrar() {
        try {
            const result = await Entrar(email, senha);
            storage('usuario-logado', result);

            const Usuario = storage('usuario-logado')

            Navigate(`/chat/${Usuario.id}`)

        } catch (err) {
            if (err.response.status = 401) {
                setErro(err.response.data.erro)
            }
        }
    }
    return(

        <div className="Login-Principal">
            <main>
                <section className="Logo-MonkChat-telRoxa">
                   <TelaRoxa/>
                </section>
                <section className='insertion-info'>
                    <div className='input-title'>
                        <h1>Faça seu login </h1>

                        <div className='inputs'>
                            <label> E-mail </label>
                            <input type='email' placeholder='Digite seu email' value={email} onChange={e => setEmail(e.target.value)}></input>
                        </div>
                        <div className='inputs'>
                            <label> Senha </label>
                            <input type="password" placeholder='Digite sua senha' value={senha} onChange={e => setSenha(e.target.value)}></input>
                        </div>
                            
                        <button className='botão-login' onClick={ClickEntrar}> Login </button>
                        <div className='erro'>
                            {erro}
                        </div>
                    </div>

                    <div className='text-Registrati'>
                        <p>Não possui uma conta?<br/> Crie uma agora clicando <a href="/cadastrar">aqui</a></p>
                    </div>
                </section>
            </main>
        </div>
    )
}