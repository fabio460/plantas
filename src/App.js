
import './App.css';
import {BrowserRouter,Link,Route,Switch} from 'react-router-dom';

import Home from './homePlantas';
import Cadastro from './cadastro';
import TelaDeCompra from './letaDeCompra';
import CadastrarUsuario from './cadastro_usuario';
import Login from './login';
function App() {
  
  return (
    <div className="myApp">
              <BrowserRouter>
           <Link to='/'></Link>
           <Link to='/cadastro'></Link>
           <Link to='/compra'></Link>
           <Link to='/login'></Link>
           <Link to='/cadastrarUsuario'></Link>
           <Switch>
             <Route exact path='/'><Home/></Route>
             <Route path='/cadastro'><Cadastro/></Route>
             <Route path='/compra'><TelaDeCompra/></Route>
             <Route path='/cadastrarUsuario'><CadastrarUsuario/></Route>
             <Route path='/login'><Login/></Route>
           </Switch>
        </BrowserRouter>
    </div>
  );
}

export default App;
