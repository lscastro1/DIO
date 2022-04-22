const number = document.querySelector('#currentNumber');
let valor = 0;
document.addEventListener('click', (e) => {
    const el = e.target;


    if (el.name === "subtrair") {
        valor = valor - 1;
        number.innerHTML = `${valor}`;
    }

    if (el.name === "adicionar") {
        valor = valor + 1;
        number.innerHTML = `${valor}`;
    }
})