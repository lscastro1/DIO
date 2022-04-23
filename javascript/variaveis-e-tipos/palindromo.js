let word = "natan", reverseWord, aux;

aux = word.split("");
reverseWord = aux.reverse().toLocaleString().replaceAll(',', '');

console.log(reverseWord === word)