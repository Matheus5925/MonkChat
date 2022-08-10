import { BrowserRouter, Routes , Route } from 'react-router-dom';

import Cadastrar from './pages/Cadastro';
import Alterar from './pages/Alterar';
import Chat from   './pages/Chat';
import Login from './pages/Login';


export default function Index() {
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Login/>}></Route>
                <Route path='/cadastrar' element={<Cadastrar/>}></Route>
                <Route path='/alterar' element={<Alterar/>}></Route>
                <Route path='/chat' element={<Chat/>}></Route>
            </Routes>
        </BrowserRouter>
    )
}
