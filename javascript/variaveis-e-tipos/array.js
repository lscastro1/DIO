let array = [];

// Adiciona no fim do array
console.log(`################################
Adiciona no fim do array 
`);
array.push(1);
array.push(2)
array.push(3)
console.log(array);

// Adiciona no começo do array
console.log(`################################
Adiciona no começo do array
`);
array.unshift(0);
console.log(array);

// Remove do fim
console.log(`################################
Remove do fim
`);
array.pop();
console.log(array)

// Remove do começo
console.log(`################################
Remove do começo
`);
array.push(3);
array.shift();
console.log(array);

//inverte um array
console.log(`################################
inverte um array`);
array = array.reverse();
console.log(array);
