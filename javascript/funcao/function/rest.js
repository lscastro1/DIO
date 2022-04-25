// Combina os argumentos em um array

function confereTamanho(...args) {
    console.log(args.length);
    console.log(args);
}

confereTamanho(1, 2)// 2
confereTamanho(4, 7, 8)// 3