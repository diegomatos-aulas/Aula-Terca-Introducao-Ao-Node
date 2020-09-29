const fileSystem = require("fs");

// Separa os dados do arquivo em pedaços
// const readStream = fileSystem.createReadStream("./lore.txt", "utf8");
// const writeStream = fileSystem.createWriteStream("exemplo.html");

/*
readStream.on("data", chunk => {
  writeStream.write(chunk);
})*/

// PIPES
// Permite pegar uma readstream e escrever em outro local (writestream)
// Muito mais simples que o exemplo acima

// readStream.pipe(writeStream);

// const writeStream = fileSystem.createWriteStream("exemplo.txt.gz");

const zlib = require("zlib");
// const gzip = zlib.createGzip();

// readStream.pipe(gzip).pipe(writeStream);


const readStream = fileSystem.createReadStream("exemplo.txt.gz");
const writeStream = fileSystem.createWriteStream("descompactado.txt");

const gUnzip = zlib.createGunzip();

readStream.pipe(gUnzip).pipe(writeStream);