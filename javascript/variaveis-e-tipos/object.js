let obj = {}, person = {}, mom = "nameOfMom";

// Tipo mais comum de declação
obj.name = "Julia";
obj.age = 20;
console.log(Object.keys(obj));

//Geralmente usado quando quer mandar uma variavel.
person["numberOfSimblings"] = 3;
console.log(person);

person[mom] = "Maria";
console.log(person);