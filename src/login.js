import React,{useState} from "react";
import { useHistory } from "react-router";
function Login(){
    
    const [email,setEmail]=useState();
    const [senha,setSenha]= useState();
    
    const auth = ()=>{
      const formdata = new FormData();
      formdata.append('nome','ana')
      formdata.append('senha','an')
       fetch('https://api-plantas.vercel.app/token',{
        method:'POST',
        body:JSON.stringify({"nome":"ana","senha":"an"}),
        headers:{"Content-Type":"application/json"}
      })
      .then(res=>res.json())
      .then(res=>console.log(res))
      //.catch(res=>console.log(res));
      //h.push('/')
    }
    const h = useHistory()
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