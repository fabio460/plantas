import React, { useEffect, useState } from 'react';
import {useHistory} from 'react-router-dom';
import api from './api';
import Planta from './planta';
import i1 from './imagens/slide_1.jpg';
import i2 from './imagens/slide_2.jpg';
import i3 from './imagens/slide_3.jpg';
import logo from './imagens/logo.jpg';
import git from './imagens/github.png';
function Home(){
    
   const [list,setList]=useState([]) 
   const h = useHistory();
   async function carregar(){
        document.querySelector('.Lista_plantas').innerHTML='carregando ...'
        const l =await api.listar();
        document.querySelector('.Lista_plantas').innerHTML=''
        setList(l);
        
    }
    useEffect(()=>{
        carregar();
        
    },[])
    
    const link_cadastro = ()=>{
        if(localStorage.getItem('token')){
            h.push('/cadastro')
        }
        else{
            alert('para cadastrar precisa estar logado')
            window.location.reload()
        }
    }
    var contador = 0
    const slide_right = ()=>{
        
        if(contador > (-200) ){
            contador-=100;
        }
       console.log(contador)
        document.querySelector('.i1').style=`margin-left:${contador}vw`
    }
    const slide_left = ()=>{
    
        if(contador < 0 ){
            contador+=100;
        }
        document.querySelector('.i1').style=`margin-left:${contador}vw`
    }

    const girarSlide = (condicao)=>{
        if(condicao){
            setInterval(() => {
                setTimeout(() => {
                    document.querySelector('.i1').style=`margin-left:-100vw`
                    setTimeout(() => {
                        document.querySelector('.i1').style=`margin-left:-200vw`
                        setTimeout(() => {
                            document.querySelector('.i1').style=`margin-left:-100vw`
                            setTimeout(() => {
                                document.querySelector('.i1').style=`margin-left:0vw`
                            }, 6000);
                        }, 6000);
                    }, 6000);
                }, 6000);
            }, 24000);
        }
    }

    
    const logout = ()=>{
        localStorage.setItem('token','');
        localStorage.setItem('usuario','');
        setTimeout(() => {
            window.location.reload();
        }, 1000);
    }

    setTimeout(() => {
       // localStorage.setItem('token','');
    }, 30000);
    
    const login = ()=>{

        h.push('/login')
        
    }
     
    girarSlide(false);
    if(localStorage.getItem('token')){
        var user = localStorage.getItem('usuario');
    }
    else{
        user=''
    }
  
    return <>
       <header>
           <a href='https://fabio460.github.io/Portifolio/'><img src={logo} alt=''/></a>
           <h1> Plantas & plantas </h1>
           <div className='header_2'>
                {localStorage.getItem('token')?<h5 className='link' onClick={logout}>logout</h5>:<h5 onClick={login} className='link'>login</h5>}
                <div className='usuario'>{user}</div>
                <h5 className='link' onClick={link_cadastro}>cadastrar item</h5>
                <a href='https://github.com/fabio460'><img src={git} alt=''/></a>
           </div>
       </header>
       <div></div>
        <div className='slide'>
            <div className='slide-controls'>
                <div  onClick={slide_left}  className='slide-control'>{"<"}</div>
                <div onClick={slide_right} className='slide-control'>{">"}</div>
            </div>
            <div className='slide-width'>
          
                <div className='imagens i1' >
                   <img src={i1} alt=''/>
                </div>
                <div className='imagens i2'>
                   <img src={i2} alt=''/>
                </div>
                <div className='imagens i3'>
                   <img src={i3} alt=''/>
                </div>            
            </div>
        </div>
        <div className='Lista_plantas'>
            {list.map((item)=>{
            return <Planta titulo={item.titulo} imagem={item.imagem} objeto={item} />
            })}
        </div>
    </>
}
export default Home;