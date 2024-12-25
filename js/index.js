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
async function obterDadosDoCep(){
    try{
    const resposta = await fetch('https://viacep.com.br/ws/01001000/json/')
    const dados = await resposta.json()
    console.log(dados);
    
    }catch(erro){
        console.log("Deu errado",erro)
    }finally{
        console.log('terminou a requisição')
    }
    
}

obterDadosDoCep();