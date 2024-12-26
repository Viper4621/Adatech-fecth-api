// console.log("fetch API");
//não é instantaneo então a função fetch =e uma promise
//tipo de requisição get só url resolve
//requisição http com fecth retorna uma response precisamos transformar em JSON 
//fetch('https://viacep.com.br/ws/01001000/json/').then((resposta)=>{ resposta.json() porem temos que criar uma var para guardar os dados



//then / catch

// fetch('https://viacep.com.br/ws/01001000/json/')
// .then((resposta)=>{
//     //abaixo transformamos em json porem essa transformação por ser uma promisse temos que criar outro then
//    resposta.json().then(dados => console.log(dados));
// })
// .catch((erro)=>{
//     console.log('Erro', erro);
// });

//async //await fica mais legivel e funciona igual then/catch
//abaixo estrutura completa em caso de erro de requisição e um finally caso desejar colocar extras
// async function obterDadosDoCep(){
//     try{
//     const resposta = await fetch('https://viacep.com.br/ws/01001000/json/')
//     const dados = await resposta.json()
//     console.log(dados);
    
//     }catch(erro){
//         console.log("Deu errado",erro)
//     }finally{
//         console.log('terminou a requisição')
//     }
    
// }

// obterDadosDoCep();

//usando dummyapi
//função para pegar usuarios

async function getUsers(){

    try{
    const resposta = await fetch("https://dummyapi.io/data/V1/user?created=1",{
        headers: {
            'app-id': '63f77cc1b7f489f0b351c30f'
        }
    });

    const users = await resposta.json();
    console.log(users);
    }catch(erro){
        console.log("Deu erro", erro);
    }
}

getUsers();


//get não aceita objetos javascript apenas string precisa transformar
//função para criar usuarios
async function createUser(){
    //criamos a variavel para colocar o objeto JS
    const userData = {
        "firstName": "Erick",
        "lastName": "Silva",
        "email": "xdxd@gmail.com"
    };
    
    try{
    await fetch('https://dummyapi.io/data/V1/user?create',{
        method: 'POST',
        headers: {
            //usando o insomia ele cria o content type quando criamos um objeto JS então precisarmos colocar no headers tbm para dar sucesso
            'app-id': '63f77cc1b7f489f0b351c30f',
            'Content-Type': "application/json",
        },
        //transformamos nosso objeto js em string para usar 
        body: JSON.stringify(userData),
    });
   }catch(erro){
    console.log("Deu erro ao tentar criar novo usuario", erro);
   }
}

// createUser();
//função para pegar usuario que criamos

async function getUser(){
    const dadosUsuario = await fetch("https://dummyapi.io/data/V1/user/id do usuario criado", {
        headers:{
            'app-id': '63f77cc1b7f489f0b351c30f'
        },
    });
}

// getUser();