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

fileSystem.readdir("aula", (err, files) => {
  if(err){
    console.log(err);
    return;
  }

  console.log("Lido a pasta com sucesso: ", files);

  let pastasEncontradas = false;

  // Encontrar as Pastas
  let todosArquivos = [];
  let todasAsPastas = [];

  files.forEach((file) => {
    const isFile = path.extname(file);
    if (isFile) {
      todosArquivos.push(file);
    }
    else {
      todasAsPastas.push(file);
    }
  })

  while(!pastasEncontradas){
    todasAsPastas.forEach(pasta => {
      fileSystem.readdir(`./aula/${pasta}`, (err, files) => {
          if(err){
            console.log(err);
            return;
          }

          console.log("Lido a pasta com sucesso: ", files);

          files.forEach((file) => {
            const isFile = path.extname(file);
            if (isFile) {
              todosArquivos.push(file);
            }
            else {
              todasAsPastas.push(file);
            }
          })
      })
    })
    pastasEncontradas = true;
  }
  // Apagar os Arquivos

  console.log("Todos os arquivos: ", todosArquivos)
  /*todosArquivos.forEach(file => {
    fileSystem.unlink(`./aula/${file}`, (err) => {
      if (err) {
        console.log(err);
        return;
      }

      console.log(`Arquivo ${file} deletado com sucesso`);
    })
  })*/
})