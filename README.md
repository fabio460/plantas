Site de plantas              

 link: https://plantas-beta.vercel.app/     

        No front-end foi utilizado React,js com hookes, no back-end, Node.js com MongoDb. 

        No sistema, é exibido um layout com uma lista de produtos vindo do back-end.
        No modelo Restfull, esta API e consumida utilizando a biblioteca axios no Javascript.
        Um componente é renderizado para cada objeto da lista exibindo as plantas.  

        Foi utilizado sistema de rotas da biblioteca ‘react-router-dom’, ao clicar em uma foto,
        irá ser direcionado para outra pagina buscado os dados do objeto selecionado e renderizado 
        na tela com o resto das informações contidas 

        Foi utilizado um sistema de login utilizando token de acesso enviando e-mail
        e senha na requisição e retornando um token e o nome do usuário caso esteja cadastrado.  

        O sistema permite o usuário fazer cadastro, casa não seja, para poder fazer o login  

        O sistema permite o usuário cadastrado e logado, fazer cadastro de produtos, caso não seja, 
        ele é redirecionado para página home sempre que tentar acessar  
    
        Os efeitos de slide show e das fotos foram utilizados Javascript puro 