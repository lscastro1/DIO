const helloWorld = () => {
    return 'Hello World'
}

console.log(helloWorld());

// Restrições de arrow function:

// -"this" sempre será o objeto global. Métodos para modificar seu valor
// não irão funcionar
// - Não existe o objeto arguments

// obs: não utilize arrow function para metodos de objetos, utilize a 
// funcão comum