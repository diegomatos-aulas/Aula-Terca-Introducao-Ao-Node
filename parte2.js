const EventEmitter = require("events");
const eventEmitter = new EventEmitter();

/*
eventEmitter.on("teste", (...args) => {
  let soma = args.reduce((valorAcumulativo, valorAtual) => {
    return valorAcumulativo + valorAtual
  }, 10)
  console.log(soma)
})

eventEmitter.emit("teste", 1,2,34,5,6,7,4)
*/

class Jogador extends EventEmitter{
  constructor({username, pontuacao}){
    super();
    this._username = username;
    this._pontuacao = pontuacao;
  }

  get username(){
      return this._username;
  }

  get props(){
      const username = this.username;
      const pontuacao = this._pontuacao;

      return {
          username,
          pontuacao
      };
  }
}

const jogador = new Jogador({username: "Diego", pontuacao: 15});

jogador.on("propriedades", ()=>{
  console.log(jogador.props)
})

jogador.emit("propriedades")