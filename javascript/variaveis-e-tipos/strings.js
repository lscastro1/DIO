let nome = 'João';
let sobrenome = 'Pedro';

console.log(nome.length);
console.log(`###################
Concatenação
###################`);

console.log(nome + "\n" + sobrenome);
console.log("\n" + nome[1]);

// Método split

let frase = "Olá, tudo bem com você?";

console.log(`###################
Método split
###################`);

console.log(frase.split(""));
console.log(frase.split(" "));

// Método includes

console.log(`###################
Método includes
###################`);

console.log(frase.includes("tudo"));

// Método start e end with

console.log(`############################
Método starts e ends with
############################`);

console.log(frase.startsWith("R"));
console.log(frase.endsWith("?"));

// Método replace

console.log(`###################
Método replace
###################`);

const FRASE_MODIFICADA = frase.replace(",", "!");
console.log(FRASE_MODIFICADA);
console.log(frase);