interface IPessoa {
    nome: string;
    idade: number;
    altura: number;
    peso: number;
}

class Pessoa implements IPessoa{
    nome: string;
    idade: number;
    altura: number;

    constructor(nome: string, idade: number, altura: number) {
        this.nome = nome;
        this.idade = idade;
        this.altura = altura;
    }

    comer() {
        return "comendo..."
    }
}

const alturaDaPessoa = 1.80
const idadeDaPessoa = 18
const nomeDaPessoa = "Lucas"
const pessoa1 = new Pessoa(nomeDaPessoa, idadeDaPessoa, alturaDaPessoa);
console.log(pessoa1, pessoa1.comer())