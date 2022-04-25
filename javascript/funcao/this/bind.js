
const retornaNome = function () {
    return this.name;
}

let nome = retornaNome.bind({ name: 'bruno' });
console.log(nome());