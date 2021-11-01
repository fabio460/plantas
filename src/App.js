
import './App.css';
import {BrowserRouter,Link,Route,Switch} from 'react-router-dom';

import Home from './homePlantas';
import Cadastro from './cadastro';
function App() {
  
  return (
    <div className="myApp">
              <BrowserRouter>
           <Link to='/'></Link>
           <Link to='/cadastro'></Link>
           <Switch>
             <Route exact path='/'><Home/></Route>
             <Route path='/cadastro'><Cadastro/></Route>
           </Switch>
        </BrowserRouter>
    </div>
  );
}

export default App;
