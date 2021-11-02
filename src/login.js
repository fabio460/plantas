import React,{useState} from "react";
import { useHistory } from "react-router";
import axios from 'axios';
function Login(){
    
    const [email,setEmail]=useState();
    const [senha,setSenha]= useState();
    const h = useHistory()
    const auth = ()=>{

       axios.post('https://api-plantas.vercel.app/token',{
          nome:email,
          senha:senha
        })
        .then((res)=>{
          console.log(res.data)
           localStorage.setItem('token',res.data)
           localStorage.setItem('usuario',res.data.usuario)
        })
        
        h.push('/')
        setTimeout(() => {
          window.location.reload();
        }, 500);
    }
  
    return <>
        <button onClick={()=>h.push('/')}>voltar</button>
       <div className='formulario'>
            <h1>Login</h1>
            
            <input value={email} onChange={e => setEmail(e.target.value)} placeholder='email'/>
            <input value={senha} onChange={e => setSenha(e.target.value)} placeholder='senha'/>
            <button onClick={auth}>logar</button>

       </div>

      
    </>
}
export default Login;