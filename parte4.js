const fileSystem = require("fs");

// Criar um arquivo

/* fileSystem.writeFile("./exemplo.html", "<h1>HTML Criado através do NODE</h1>", (err) => {
    if (err) {
        console.log(err);
        return;
    }

    console.log("Arquivo criado com Sucesso !!")
})
 */

// Ler o arquivo

/*
fileSystem.readFile("./exemplo.txt", "utf8", (err, data) => {
    if(err) {
        console.log(err);
        return;
    }

    console.log(data);
})
*/

// Renomear o arquivo

/*
fileSystem.rename("exemplo.txt", "parte4.html", (err) => {
    if (err) {
        console.log(err);
        return;
    }
    console.log("Renomeado com Sucesso !!")
})
*/

// Adicionar informação ao arquivo

/* const html = `
<body>
    <h1>Injetado pelo JS / Node</h1>
</body>
`
fileSystem.appendFile("parte4.html", html, (err) =>{
    if (err) {
        console.log(err);
        return;
    }
    console.log("Informação adicionada com Sucesso !!")
}) */

// Apagar arquivo

/* fileSystem.unlink("parte4.html", (err) => {
    if (err) {
        console.log(err);
        return;
    }
    console.log("Arquivo deletado com Sucesso !!")
}) */