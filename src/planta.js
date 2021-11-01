import React from "react";

function Planta({titulo,imagem}){
    return<>
      <div className='planta'>
            <h5>{titulo}</h5>
            <img src={imagem} alt=''/>
      </div>
    </>
}
export default Planta;