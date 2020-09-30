const fileSystem = require("fs");
const path = require("path");

// Criando Pasta

// mkdir => make directory

/* fileSystem.mkdir("aula", (err) => {
  if (err) {
      console.log(err);
      return;
  }
  console.log("Pasta criada com Sucesso !!")
}) */

// Apagar Pasta

// rmdir => remove directory

/*fileSystem.rmdir("aula", (err) => {
  if (err) {
      console.log(err);
      return;
  }
  console.log("Pasta removida com Sucesso !!")
})*/

// Criar Arquivo dentro de Pasta


/* fileSystem.writeFile("./aula/praticando-com-node.txt", "Arquivo de teste", (err) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log("Arquivo criado com Sucesso !!")
}) */

// Deletar uma pasta que possui arquivos dentro
/* 1º Sabemos o que tem dentro */
/*fileSystem.unlink("./aula/praticando-com-node.txt", (err) =>{
  if (err){
    console.log(err);
    return;
  }

  console.log("Arquivo Deletado com Sucesso !");

  fileSystem.rmdir("aula", (err) =>{
    if (err) {
      console.log(err);
      return;
    }

    console.log("Pasta deletada com Sucesso !!")
  })
})*/

/* 2º Não sabemos o que tem dentro */
deletarPasta("aula");

function deletarPasta(pasta) {
  // Para realizar a leitura da pasta, eu utilizarei um método chamado de Funções Recursiva. Basicamente a função lerPasta se "auto" chamará, ocorrendo um looping dentro dela mesmo.
  let {todosOsArquivos, todasAsPastas} = lerPasta(pasta); // Isso ocorre SINCRONAMENTE
  console.log("Todos os arquivos: ", todosOsArquivos)

  // Apagar os Arquivos
  todosOsArquivos.forEach(file => {
    fileSystem.unlinkSync(file); // Apaga SINCRONAMENTE
  })

  // Apagar as Pastas | Só consigo apagar as pastas APENAS quando todos os arquivos forem apagados, assim terei certeza que as pastas estarão vazias
  todasAsPastas.forEach(file => {
    fileSystem.rmdirSync(file); // Aqui não há uma real necessidade de ser SINCRONO
  })
}

/*
  Ler pasta é uma função que retorna UM OBJETO todos os arquivos, subarquivos e pastas e subpastas em questão, que existirem. INCLUINDO a pasta Pai, no nosso caso, a pasta "aula"
*/

function lerPasta(pastaPai) {
  let files = fileSystem.readdirSync(pastaPai)

  console.log("Lido a pasta " + pastaPai + " com sucesso: ", files);

  // Lista com todos os subarquivos e subpastas
  let todosOsArquivos = [];
  let todasAsPastas = [pastaPai]; // Será acumulado para cada pasta que lermos

  // Percorremos os arquivos dentro da pasta pai
  files.forEach((file) => {
    let filePath = pastaPai + "/" + file;

    // Verificamos se é uma pasta através do método isDirectory()
    const isFolder = fileSystem.lstatSync(filePath).isDirectory();

    // Caso seja uma pasta
    if (isFolder) {
      // Leremos seu conteúdo | Recurssividade de Função
      // O Loop irá PARAR aqui até ler todas as pastas, pois isso é SÍNCRONO
      // Usamos a Desestruturação de objetos para resgatar as arrays que precisamos, facilitando a leitura do código
      let {todosOsArquivos: todosSubArquivos, todasAsPastas: todasSubPastas} = lerPasta(filePath);

      // E usaremos o método concat para juntar as arrays
      todosOsArquivos = todosSubArquivos.concat(todosOsArquivos);
      todasAsPastas = todasSubPastas.concat(todasAsPastas);
    }
    else{
      todosOsArquivos.push(filePath); // Agora ficará "aula/nomeArquivo"
    }
  })

  // Retornamos um objeto
  return {todosOsArquivos, todasAsPastas};
}