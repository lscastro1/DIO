// Função auto invocada

(function (a, b) {
    return a + b
})(2, 2)

const SOMA = (function (a, b) {
    return a + b
})(2, 4)

console.log(SOMA);
