import TelaRoxa from '../../components/telRoxa';
import './index.scss';
import '../../common/index.scss';

export default function Alterar() {
    return(
        <div className="Alterar-Principal">
             <main>
                <section className="Logo-MonkChat-telRoxa">
                    <TelaRoxa/>
                </section>
                <section className='insertion-info'>
                    <div className='input-title'>
                        <h1>Faça sua alteração </h1>

                        
                        <div className='dados-usuario'>
                            <div className='inputs'>
                                <label> E-mail </label>
                                <p>matheus@gmail.com</p>
                            </div>
                            <div className='inputs'>
                                <label> Senha </label>
                                <p>*****</p>
                            </div>
                        </div>
                        <div className='inputs'>
                            <label> Nick </label>
                            <input type="text" placeholder='Digite seu novo Nick'></input>
                        </div>
                            
                        <button className='botão-login'> Alterar </button>
                    </div>

                </section>
         </main>
        </div>
    )
    
}