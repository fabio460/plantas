import React, { useState } from "react";
import {useHistory} from 'react-router-dom';
function CadastrarUsuario(){
    const [nome,setNome] = useState();
    const [email,setEmail]=useState();
    const [senha,setSenha]= useState();
    const h = useHistory()
    const cadastrar = ()=>{
        
    }
    return <>
        <button onClick={()=>h.push('/')}>voltar</button>
        <div className='formulario'>
              <h1>Cadastrar usuario e senha</h1>
               
              <input value={nome} onChange={e => setNome(e.target.value)} placeholder='nome'/>
              <input type='email' value={email} onChange={e => setEmail(e.target.value)} placeholder='email'/>
              <input type='password' value={senha} onChange={e => setSenha(e.target.value)} placeholder='senha'/>
              <button onClick={cadastrar}>Cadastrar</button>
              
        </div>
    </>
}
export default CadastrarUsuario;