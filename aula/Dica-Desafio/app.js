let fs = require("fs"); // Requisitar FileSystem
const db = require("./db.json") // Requisitar Arquivo JSON

// Nova informação para ser adicionado ao arquivo JSON
let body = {
  nome : "Filipe",
  email: "emaildofilipe@email.com"
}

// Adicionando a Informação ao Arquivo JSON
db.push(body);

// Sobrescrevendo JSON com a nova Informação
fs.writeFile("db.json", JSON.stringify(db), (err) => {
  if (err) {
    console.log(err);
    return
  }

  console.log("Arquivo atualizado com sucesso !")
})