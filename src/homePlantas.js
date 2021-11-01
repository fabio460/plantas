import React, { useEffect, useState } from 'react';
import {useHistory} from 'react-router-dom';
import api from './api';
import Planta from './planta';

function Home(){
   
   const [list,setList]=useState([]) 
   const h = useHistory();
   async function carregar(){
        document.querySelector('.Lista_plantas').innerHTML='carregando ...'
        const l =await api.listar();
        document.querySelector('.Lista_plantas').innerHTML=''
        setList(l)
    }
    useEffect(()=>{
        carregar()
    },[])
    
    const link_cadastro = ()=>{
        h.push('/cadastro')
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


    return <>
       <header><h1 className='link' onClick={link_cadastro}>cadastro</h1></header>
        <div className='slide'>
            <div className='slide-controls'>
                <div  onClick={slide_left}  className='slide-control'>{"<"}</div>
                <div onClick={slide_right} className='slide-control'>{">"}</div>
            </div>
            <div className='slide-width'>
          
                <div className='imagens i1'>

                </div>
                <div className='imagens i2'>

                </div>
                <div className='imagens i3'>

                </div>            
            </div>
        </div>
        <div className='Lista_plantas'>
            {list.map((item)=>{
            return <Planta titulo={item.titulo} imagem={item.imagem} objeto={item}/>
            })}
        </div>
    </>
}
export default Home;