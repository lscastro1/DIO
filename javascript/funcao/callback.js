// Uma função passada como argumento para outra função

const calc = function (operacao, num1, num2) {
    return operacao(num1, num2);
}

const sum = function (num1, num2) {
    return num1 + num2;
}

const sub = function (num1, num2) {
    return num1 - num2;
}

console.log(calc(sum, 10, 5));
console.log(calc(sub, 10, 5));