const alunos = [
    { nome: 'João', nota: 7.3, bolsilta: false },
    { nome: 'Maria', nota: 9.2, bolsilta: true },
    { nome: 'Pedro', nota: 9.8, bolsilta: false },
    { nome: 'Ana', nota: 8.7, bolsilta: true }
]

console.log(alunos.map(a => a.nota))
const resultado = alunos.map(a => a.nota).reduce(function(acumulador, atual) {
    console.log(acumulador, atual)
    return acumulador + atual
}, 0)

console.log(resultado)