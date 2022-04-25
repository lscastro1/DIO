const USER = {
    id: 42,
    name: "joe",
    fullName: {
        firstName: 'Jhon',
        lastName: 'Doe'
    }
};

function userId({ id }) {
    return id;
}

function getFullName({ fullName: { firstName: first, lastName: last } }) {
    return `${first} ${last}`;
}

console.log(userId(USER));
console.log(getFullName(USER));
