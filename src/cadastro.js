import React, { useState } from "react";
import { useHistory } from "react-router";
import api from "./api";

function Cadastro(){
    const [titulo,setTitulo]=useState();
    const [imagem,setImagem]=useState();
    const [descricao,setDescricao]= useState();
    const [preco,setPreco]=useState();
    const h = useHistory()
    const postar = ()=>{
       if(titulo && imagem && descricao && preco){
        api.postar(titulo,imagem,descricao,preco)
        alert('cadastrado com sucesso')
       }else{
           alert('campos sem preencher')
       }
    }
    const home = ()=>{
       h.push('/')
    }
    return <>
       <h1 className='link' onClick={home}>home</h1>
       <div className='formulario'>
            <h1>Cadastro</h1>
            <input value={titulo} onChange={e => setTitulo(e.target.value)} placeholder='titulo'/>
            <input value={imagem} onChange={e => setImagem(e.target.value)} placeholder='imagem'/>
            <input value={descricao} onChange={e => setDescricao(e.target.value)} placeholder='descricao'/>
            <input value={preco} onChange={e => setPreco(e.target.value)} placeholder='preço'/>
            <button onClick={postar}>postar</button>
            
       </div>
    </>
}

export default Cadastro;