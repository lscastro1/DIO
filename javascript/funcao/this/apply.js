// Pode passar parâmetros dentro de um array

const MY_OBJ = {
    num1: 2,
    num2: 4,
};

function soma(a, b) {
    console.log(this.num1 + this.num2 + a + b);
}

soma.apply(MY_OBJ, [2, 2]);