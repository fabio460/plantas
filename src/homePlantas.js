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
   
    return <>
        <h1 className='link' onClick={link_cadastro}>cadastro</h1>
        <div className='Lista_plantas'>
            {list.map((item)=>{
            return <Planta titulo={item.titulo} imagem={item.imagem}/>
            })}
        </div>
    </>
}
export default Home;