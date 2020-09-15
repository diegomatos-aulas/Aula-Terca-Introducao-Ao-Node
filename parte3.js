const readline = require("readline"); // Interface

// stdin => standard input, onde dados são enviados e lidos pelo programa
// stdout => standard output, é o descriptor padrao onde o programa pode mostrar algo ao usuario

const rl = readline.createInterface({
  input : process.stdin,
  output : process.stdout
});

rl.on("errou", (userInput) => {
  rl.setPrompt("Tente novamente")
  rl.prompt();
})

rl.on("acertou", (userInput) => {
  rl.setPrompt("Parabéns, você acertou !")
  rl.prompt();  
  rl.close();
})

let date = new Date();
let idade = Math.round(Math.random() * 100);
let anoAtual = date.getFullYear();
let resposta = anoAtual - idade; //Number

rl.question(`Uma pessoa de ${idade} anos que vive no ano de ${anoAtual}, nasceu em que ano ?`, (userInput)=>{
  console.log(userInput)
  if (userInput === String(resposta)) {
    rl.emit("acertou")
  }
  else{
    rl.emit("errou")
  }
})