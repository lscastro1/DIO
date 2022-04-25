// Como metodo de um obejto this vai se referir ao valor do objeto

let obj = {
    nome: 'Soares',
    sobrenome: 'Alguma coisa',
    getFullName() {
        console.log(this.nome);
    }
}

obj.getFullName()