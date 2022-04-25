const aluno = [
    {
        nome: 'Luiz',
        nota: 7,
        turma: '18'
    },

    {
        nome: 'João',
        nota: 6,
        turma: '18'
    },

    {
        nome: 'Maria',
        nota: 9,
        turma: '2B'
    },
]

const media = (aluno, media) => {
    const aux = [];
    for (let value of aluno) {
        const { nota, nome } = value;
        if (nota >= media) {
            aux.push(nome);
        }
    }

    return aux;
}

console.log(media(aluno, 5))

