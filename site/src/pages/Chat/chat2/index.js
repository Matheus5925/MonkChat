import './index.scss'
import '../../../common/index.scss'
import LogoMonkChat from '../../../assets/imgs/logo1.svg';
import recarregar from '../../../assets/imgs/carregar.png';
import { useEffect, useState } from 'react';
import { CadastrarSala } from '../../../api/services';
import Storage from 'local-storage';
import { toast, ToastContainer } from 'react-toastify';
import { BuscarSala, BuscarTodasMsg, EntrarnaSala } from '../../../api/acoes';


export default function Chat2() {
    const [nomeSala, setNomeSala] = useState('');
    const [salas, setSalas] = useState([]);
    const [renderSalas, setRenderSalas] = useState(false);
    const [mensagens, setMensagens] = useState([]);

    let DadosStorage = Storage('usuario-logado');

    let desestruturarStorage = {
        id: DadosStorage.id,
        nome: DadosStorage.nome,
        email: DadosStorage.email,
        tudo: DadosStorage
    }

    const CarregarSala = async idSala =>{
        try {
            const r = await BuscarTodasMsg(idSala);
            setMensagens(r);
            
        } catch (err) {
            toast.error(err.response.data.erro)
       }
    }

    const InserirSala = async _ =>{
       try {
            console.log(nomeSala);
            const r = await CadastrarSala(desestruturarStorage.id, nomeSala);
            toast.dark('Sala Cadastrada com sucesso');
       } catch (err) {
            toast.error(err.response.data.erro)
       }
    };

    const BuscarSalasExistentes = async _ =>{
        try {
            if(nomeSala){
                const r = await BuscarSala(nomeSala);
                setSalas(r);
                setRenderSalas(true);
            }else{
                setRenderSalas(false);
            }
        } catch (err) {
            toast.error(err.response.data.erro)
        }
    }

    const PegarInfoSala = (nome, id) =>{
        let informacoes = {
            nome: nome,
            id: id
        }
        setNomeSala(informacoes.nome)
    }

    useEffect(()=>{
       setTimeout(()=>{
        BuscarSalasExistentes();
       },2000)
    },[nomeSala]);

    return(
        <div className="Chat-Principal">
            <ToastContainer/>
            <div className='logo-cima'>
                <img className='logo_monkChat' src={LogoMonkChat} alt='Logo MonkChat'></img>
                <hr></hr>
                <h2>MonkChat</h2>
            </div>
            <main>
                <section className='lateral-menu'>
                    <section className="enter-chat">
                        <div className="inputs  ajuste-card-sala">
                            <label>Sala:</label>
                            <input value={nomeSala} onChange={e => setNomeSala(e.target.value)} type='text' placeholder='Nome da sala'></input>
                            
                        </div>

                        { renderSalas === true && 
                            <div className='card-sala'>
                           {salas.map(item => <div onClick={() => {PegarInfoSala(item.nome, item.idSala)}} key={item.idSala} className='sala'>
                                    <p>{item.nome}</p>
                            </div>)}
                        </div>}
                        <div className="inputs">
                            <label>Nick: </label>
                            <input type='text' placeholder='Seu Nick'></input>
                        </div>
                        <div className="inputs">
                            <label>Para:</label>
                            <select name="Selecione">
                                <option value="Todos"> Todos </option>
                                <option value="Pessoa 1"> Pessoa 1 </option>
                                <option value="Pessoa 2"> Pessoa 2 </option>
                            </select>
                        </div>
                        <div className="criar-entrar">
                            <button onClick={InserirSala}> Criar </button>
                            <button> Entrar </button>
                        </div>
                    </section>
                    <section className='mensage'>
                        <div className="box-mesage">
                            <label>Mensagem: </label>
                            <textarea>
                            </textarea>
                        </div>
                        <div className="criar-entrar">
                            <button> Enviar </button>
                        </div>
                    </section>
                </section>
                <section className="map-message">
                    <div className='recarregar-div'>
                        <img className='img-recarregar' src={recarregar} alt=''></img>
                    </div>
                    <div className='mensagens'>
                        <p>(15:02:01) <span> Matheus </span> entrou na sala...</p>
                       {mensagens.map(item => <p>({item.envioMensagem}) <span> {item.enviou} </span> fala para <span>{item.para}:</span>{item.mensagem}</p>)}
                    </div>
                </section>
            </main>
        </div>
    )
}