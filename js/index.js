// console.log("fetch API");
//não é instantaneo então a função fetch =e uma promise
//tipo de requisição get só url resolve


//then / catch

fetch('https://viacep.com.br/ws/01001000/json/').then((resposta)=>{
  console.log(resposta);
}).catch((erro)=>{
    console.log('Erro', erro);
});