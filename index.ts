const numero = 20

let correta: boolean = true

console.log(typeof numero, correta)

const pessoaTupla: [String, number] = ['Mateus', 21]

// um tipo chamado Person
interface Person {
    nome: String,
    idade: number,
    profissao?: String,
    altura: number
}

const pessoa: Person = {
    nome: "Mateus",
    idade: 21,
    profissao: "Desenvolvedor",
    altura: 1.90
}

type Pessoa2 = {
    nome: String,
    idade: number,
    profissao?: String,
    altura: number
}