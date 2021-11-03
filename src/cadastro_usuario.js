import React, { useState } from "react";
import {useHistory} from 'react-router-dom';
import axios from 'axios';
function CadastrarUsuario(){
    const [nome,setNome] = useState();
    const [email,setEmail]=useState();
    const [senha,setSenha]= useState();
    const h = useHistory()
    const cadastrar = async()=>{
     
     const existeEmail =await axios(`https://api-plantas.vercel.app/listarusuariopelonome/${email}`);
        
    if(nome && email && senha ){
      if(existeEmail === "não encontrado"){
        axios.post('https://api-plantas.vercel.app/cadastrarusuario',{
            nome:nome,
            email:email,
            senha:senha
        }).then(res=>alert(res.data))
        setTimeout(() => {
            h.push('/')
        }, 1000);
      }else{
          alert('ja existe este email cadastrado')
      }
    }else{
        alert('campos não preechidos')
    }
    
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