//string
let nome: string;
nome = "Cláudia";

//numbers
let idade: Number;
idade = 27;

//boolean
let possuiMobiles: Boolean = false;

// array
let hobbies: string[] = ["Cozinhar", "Praticar Esportes"];

// tuplas
let endereco: [string, number] = ["Avenida Principal", 99];

// enums
enum Cor {
  Cinza, //0
  Verde, // 1
  Azul, // 2
  Laranja, // 3
  Amarelo, // 4
  Vermelho, // 5
}
let minhaCor: Cor = Cor.Verde;

// any volta ao cenário do javascript
let carro: any = "BMW";
carro = { marca: "BMW", ano: 2019 };

// funções
function retornaMeuNome(): string {
  return nome;
  //return idade
}

function digaOi(): void {
  console.log("Oi");
  // return idade;
}

function multiplicar(numA: number, numB: number): number {
  return numA * numB;
}

// tipo função: declarar variável que obrigatoriamente vai retornar uma função
let calculo: (x: number, y: number) => number;
calculo = multiplicar;

let oi: () => void;
oi = digaOi;

//objetos
let usuario: { nome: string; idade: number } = {
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

let funcionario: {
  supervisores: string[];
  baterPonto: (horas: number) => String;
} = {
  supervisores: ["Talles", "Cynthia"],
  baterPonto: function (hora) {
    if (hora <= 8) {
      return "Ponto normal";
    } else {
      return "Fora do horário";
    }
  },
};

// definindo tipos personalizados
// Alias
type Funcionario = {
  supervisores: string[];
  baterPonto: (horas: number) => String;
};

let funcionario2: Funcionario = {
  supervisores: ["Bia, Carlos"],
  baterPonto: function (hora) {
    if (hora <= 8) {
      return "Ponto normal";
    } else {
      return "Fora do horário";
    }
  },
};

// Union Types
let nota: number | string = 10;
nota = "10";
// nota = true é um cenário não desejado para a situação

// Checando tipos
let valor = 30;

if (typeof valor === "number") {
  console.log("É um number!");
} else {
  console.log(typeof valor);
}

// never: retorna um erro ou indica uma forma de nunca sair da função
function falha(msg: string): never {
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

let alturaOpcional: null | number = 12;
alturaOpcional = null;

type Contato = {
  nome: string;
  tel1: string;
  tel2: string | null;
};

const contato1: Contato = {
  nome: "Fulano",
  tel1: "98765432",
  tel2: null,
};

// Desafio: transformar javascript em typescript
type ContaBancaria = {
  saldo: number;
  depositar: (valor: number) => void;
};

let contaBancaria: ContaBancaria = {
  saldo: 3456,
  depositar(valor: number) {
    this.saldo += valor;
  },
};

type Correntista = {
  nome: string;
  contaBancaria: ContaBancaria;
  contatos: string[];
};

let correntista: Correntista = {
  nome: "Ana Silva",
  contaBancaria: contaBancaria,
  contatos: ["34567890", "98765432"],
};

correntista.contaBancaria.depositar(3000);
console.log(correntista);
