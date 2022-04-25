// Loop entre propriedades enumeráveis de um objeto e 
// retorna uma string com o nome das propriedades e 
// seus respectivos valores.

const MEU_OBEJTO = {
    nome: 'lucas',
    idade: 20,
    cidade: "Salvador"
}

function forInExemplo(obj) {
    for (let prop in obj) {
        console.log(prop)
        console.log(obj[prop])
    }
}
/*
for (let prop in MEU_OBEJTO) {
    console.log(`MEU_OBJETO.${prop} = ${MEU_OBEJTO[prop]}`);
}
*/

forInExemplo(MEU_OBEJTO);