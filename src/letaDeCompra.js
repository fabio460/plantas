import React from "react";
import {useHistory} from 'react-router-dom';
function TelaDeCompra(){
    const h = useHistory()
    const home = ()=>{
        h.push('/')
    }
    const titulo = localStorage.getItem('titulo');
    const imagem = localStorage.getItem('imagem')
    const descricao = localStorage.getItem('descricao');
    const preco = localStorage.getItem('preco')
    return<>
    <h1 className='link' onClick={home}>home</h1>
       <div className='bloco_compra'>
            <div>
                
                <h1>{titulo}</h1>
                <div>{descricao}</div>
                <div>{preco}</div>  
            </div>
            <img src={imagem} alt=''/>    
       </div>         
    </>
}
export default TelaDeCompra;