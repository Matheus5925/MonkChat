import './index.scss';
import LogoMonkChat from '../../assets/imgs/logo1.svg';

export default function TelaRoxa() {
    return(
        <div className='Tela-Roxa'>
                    <div className='Cont-telRoxa'>
                        <img className='img-ChatMonkey' src={LogoMonkChat} alt="Logo MonkChat"></img>
                        <h1>MonkChat</h1>
                    </div>
        </div>
    )
}