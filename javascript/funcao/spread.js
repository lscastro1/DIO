// Spread uma forma de lidar separadamente com elementos

function sum(x, y, z) {
    return x + y + z;
}

const numbers = [2, 4, 6];
console.log(sum(...numbers));