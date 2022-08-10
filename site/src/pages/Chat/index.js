import './index.scss'
import '../../common/index.scss'
import LogoMonkChat from '../../assets/imgs/logo1.svg';
import recarregar from '../../assets/imgs/carregar.png';

export default function Chat() {
    return(
        <div className="Chat-Principal">
            <div className='logo-cima'>
                <img className='logo_monkChat' src={LogoMonkChat} alt='Logo MonkChat'></img>
                <hr></hr>
                <h2>MonkChat</h2>
            </div>
            <main>
                <section className='lateral-menu'>
                    <section className="enter-chat">
                        <div className="inputs">
                            <label>Sala:</label>
                            <input type='text' placeholder='Nome da sala'></input>
                        </div>
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
                            <button> Criar </button>
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
                        <p>(15:02:01) <span> Matheus </span> fala para <span>Todos:</span> Opa, Tudo bem aí?</p>
                        <input type='text'  placeholder='Edite a mensagem'></input> 
                        <p>(15:02:01) <span> Matheus </span> fala para <span>Todos:</span> Opa, Tudo bem aí?</p>
                    </div>
                </section>
            </main>
        </div>
    )
}