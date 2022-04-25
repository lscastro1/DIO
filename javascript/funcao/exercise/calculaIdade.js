function calculaIdade(anos) {
    return `Daqui a ${anos} anos, ${this.nome} terá ${this.idade + anos
        } anos de idade.`;
}

const obj1 = {
    nome: 'lucas',
    idade: 25,
}

const obj2 = {
    nome: 'eros',
    idade: 4,
}

console.log(calculaIdade.call(obj1, 5));
console.log(calculaIdade.apply(obj2, [7]));