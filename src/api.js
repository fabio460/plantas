const api = {
    
    listar: async ()=>{
        const f = await fetch('https://api-plantas.vercel.app/listar')
        const j =await f.json()
        console.log(j)
        return j;
    },
    postar:  (titulo,imagem,descricao,preco)=>{
        let formdata =new FormData();
        formdata.append('titulo',titulo)
        formdata.append('imagem',imagem)
        formdata.append('descricao',descricao)
        formdata.append('preco',preco)

        fetch('https://api-plantas.vercel.app/postar',{
            method:'POST',
            body:formdata
        })
        .then(res=>console.log(res))
    },
    deletar: (id)=>{
         fetch('https://api-plantas.vercel.app/deletar'+id,{
            method:'DELETE'
        })
    }
}
export default api;