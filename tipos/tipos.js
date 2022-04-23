"use strict";
//string
let nome;
nome = "Cláudia";
//numbers
let idade;
idade = 27;
//boolean
let possuiMobiles = false;
// array
let hobbies = ["Cozinhar", "Praticar Esportes"];
// tuplas
let endereco = ["Avenida Principal", 99];
// enums
var Cor;
(function (Cor) {
    Cor[Cor["Cinza"] = 0] = "Cinza";
    Cor[Cor["Verde"] = 1] = "Verde";
    Cor[Cor["Azul"] = 2] = "Azul";
    Cor[Cor["Laranja"] = 3] = "Laranja";
    Cor[Cor["Amarelo"] = 4] = "Amarelo";
    Cor[Cor["Vermelho"] = 5] = "Vermelho";
})(Cor || (Cor = {}));
let minhaCor = Cor.Verde;
// any volta ao cenário do javascript
let carro = "BMW";
carro = { marca: "BMW", ano: 2019 };
// funções
function retornaMeuNome() {
    return nome;
    //return idade
}
function digaOi() {
    console.log("Oi");
    // return idade;
}
function multiplicar(numA, numB) {
    return numA * numB;
}
// tipo função: declarar variável que obrigatoriamente vai retornar uma função
let calculo;
calculo = multiplicar;
let oi;
oi = digaOi;
//objetos
let usuario = {
    nome: "Cláudia",
    idade: 24,
};
// Desafio
/*
Criar um objeto funcionário com:
        - Array de string com os nomes dos supervisores
        - Função de bater ponto que recebe a hora (número) e returna uma string
            -> Ponto normal (<= 8)
            -> Fora do horário (>8)
 */
let funcionario = {
    supervisores: ["Talles", "Cynthia"],
    baterPonto: function (hora) {
        if (hora <= 8) {
            return "Ponto normal";
        }
        else {
            return "Fora do horário";
        }
    },
};
let funcionario2 = {
    supervisores: ["Bia, Carlos"],
    baterPonto: function (hora) {
        if (hora <= 8) {
            return "Ponto normal";
        }
        else {
            return "Fora do horário";
        }
    },
};
// Union Types
let nota = 10;
nota = "10";
// nota = true é um cenário não desejado para a situação
// Checando tipos
let valor = 30;
if (typeof valor === "number") {
    console.log("É um number!");
}
else {
    console.log(typeof valor);
}
// never: retorna um erro ou indica uma forma de nunca sair da função
function falha(msg) {
    throw new Error(msg);
}
const produto = {
    nome: "Sabão",
    preco: 1,
    validarProduto() {
        if (!this.nome || this.nome.trim().length == 0) {
            falha("Precisa ter um nome!");
        }
        if (this.preco <= 0) {
            falha("Preço inválido");
        }
    },
};
let alturaOpcional = 12;
alturaOpcional = null;
const contato1 = {
    nome: "Fulano",
    tel1: "98765432",
    tel2: null,
};
console.log(contato1);
let contaBancaria = {
    saldo: 3456,
    depositar(valor) {
        this.saldo += valor;
    },
};
let correntista = {
    nome: "Ana Silva",
    contaBancaria: contaBancaria,
    contatos: ["34567890", "98765432"],
};
correntista.contaBancaria.depositar(3000);
console.log(correntista);
//# sourceMappingURL=tipos.js.map