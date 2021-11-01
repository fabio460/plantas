import React from "react";
import { useHistory } from "react-router";

function Planta({titulo,imagem,objeto}){
    const h = useHistory();
    const click = ()=>{
        localStorage.setItem('titulo',objeto.titulo)
        localStorage.setItem('imagem',objeto.imagem)
        localStorage.setItem('descricao',objeto.descricao)
        localStorage.setItem('preco',objeto.preco)
        h.push('/compra');
    }
    return<>
      <div onClick={click} className='planta'>
            <h5>{titulo}</h5>
            <img src={imagem} alt=''/>
      </div>
    </>
}
export default Planta;