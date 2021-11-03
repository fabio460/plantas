import React,{useState} from "react";
import { useHistory } from "react-router";
import axios from 'axios';
function Login(){
    
    const [email,setEmail]=useState();
    const [senha,setSenha]= useState();
    const h = useHistory()
    const auth = ()=>{

       axios.post('https://api-plantas.vercel.app/token',{
          Headers:{"Content-Type":"application/json"},
          email:email,
          senha:senha
        })
        .then((res)=>{
          console.log(res.data)
          if(res.data === "usuario não encontrado"){
             alert('usuario ou senha, inválidos')
          }else{
            localStorage.setItem('token',res.data)
            localStorage.setItem('usuario',res.data.usuario)
            h.push('/')
            setTimeout(() => {
              window.location.reload();
            }, 500);
          }
        })
        //.catch((res)=>console.log(res))
        

    }
  
    return <>
          <button onClick={()=>h.push('/')}>voltar</button>
        <div className='formulario'>
              <h1>Login</h1>
              
              <input value={email} onChange={e => setEmail(e.target.value)} placeholder='email'/>
              <input type='password' value={senha} onChange={e => setSenha(e.target.value)} placeholder='senha'/>
              <button onClick={auth}>logar</button>
              <div>Senão e cadastrado <span onClick={()=>{h.push('/cadastrarUsuario')}} className='link '>cadastre-se</span></div>
        </div>

      
    </>
}
export default Login;