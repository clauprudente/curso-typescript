// let e const
let seraQuePode = "?";
console.log(seraQuePode);

let estaFrio = true;
if (estaFrio) {
  let acao = "Colocar o casaco!";
  console.log(acao);
}

const cpf: string = "123.456.000-99";
//cpf = "321.312.431-11";
console.log(cpf);

var segredo = "externo";
function revelar() {
  var segredo = "interno";
  console.log(segredo);
}
revelar();
console.log(segredo);

for (/* var*/ let i = 0; i < 10; i++) {
  console.log(i);
}

//Arrow function
const somar = function (n1: number, n2: number): number {
  return n1 + n2;
};
console.log(somar(2, 2));

const subtrair = (n1: number, n2: number): number => n1 - n2;
console.log(subtrair(3, 2));

const saudacao = (): void => console.log("Olá!");
saudacao();

const falarCom = (pessoa: string) => console.log("Olá " + pessoa);
falarCom("Cláudia");

// uso do this

function normalComThis() {
  //   console.log(this);
}
normalComThis();

const normalComThisEspecial = normalComThis.bind(2);

normalComThisEspecial();

// console.log(this);
// const arrowComThis = () => console.log(this);
// arrowComThis();

// const arrowComThisEspecial = arrowComThis.bind(2);
// arrowComThisEspecial();

//Parametros padrão
function contagemRegressiva(
  inicio: number = 5,
  fim: number = inicio - 5
): void {
  console.log(inicio);
  while (inicio > fim) {
    inicio--;
    console.log(inicio);
  }
  console.log("Fim!");
}

contagemRegressiva();
contagemRegressiva(3);

// Operador Spread & Rest
const numbers = [1, 10, 99, -5, 200, 1034];
console.log(Math.max(...numbers));

const turmaA: string[] = ["João", "Maria", "Marisa"];
const turmaB: string[] = ["Fernando", ...turmaA, "Miguel", "Lorena"];

console.log(turmaB);

function retornarArray(a: number, ...args: number[]): number[] {
  console.log(a);
  return args;
}

const numeros = retornarArray(1, 2, 3, 4, 5, 6);
console.log(numeros);
// console.log(retornarArray(...numbers));

//Rest & Spread (Tupla)
const tupla: [number, string, boolean] = [1, "abc", false];

function tuplaParam1(a: number, b: string, c: boolean): void {
  console.log(`1) ${a} ${b} ${c}`);
}

tuplaParam1(...tupla);

function tuplaParam2(...params: [number, string, boolean]): void {
  console.log(Array.isArray(params));
  console.log(`2) ${params[0]} ${params[1]} ${params[2]}`);
}

tuplaParam2(...tupla);

//Operador Destructuring (Array)
const caracteristicas = ["Motor Zetec 1.8", 2020];
//const motor = caracteristicas[0];
//const ano = caracteristicas[1];

const [motor, ano] = caracteristicas;
console.log(motor, ano);

//Operador Destructuring (Objeto)
const item = {
  nome: "SSD 480GB",
  preco: 200,
  caracteristicas: {
    w: "Importado",
  },
};
const {
  nome: n,
  preco,
  caracteristicas: { w },
} = item;
console.log(n);
console.log(preco);
console.log(w);

const usuarioId = "SuporteCod3r";
const notificacoes: string = "19";
const boasVindas = `
Boas vindas ${usuarioId}, 
Notificações: ${parseInt(notificacoes) > 9 ? "+9" : notificacoes}`;

console.log(boasVindas);

//Desafios
//Exercício 1
const dobro = (valor: number): number => valor * 2;
console.log(dobro(10));

//Exercício 2
const dizerOla = (nome: string = "pessoa"): void => console.log(`Olá, ${nome}`);
dizerOla();
dizerOla("Cláudia");

//Exercício 3
const nums = [-3, 33, 38, 5];
// Imprimir o menor valor
console.log(Math.min(...nums));

//Exercício 4
const array = [55, 20, ...nums];
console.log(array);

//Exercício 5
const notas = [8.5, 6.3, 9.4];
const [nota1, nota2, nota3] = notas;

// Exercício 6
const cientista = { primeiroNome: "Will", experiencia: 12 };
const { primeiroNome, experiencia } = cientista;
console.log(primeiroNome, experiencia);

// Antigamente: callback
function esperar3s(callback: (dado: string) => void) {
  setTimeout(() => {
    callback("3s depois...");
  }, 3000);
}
esperar3s(function (resultado: string) {
  console.log(resultado);
});

// Promise
function esperar3sPromise() {
  return new Promise((resolve: any) => {
    setTimeout(() => {
      resolve("3s depois promise...");
    }, 3000);
  });
}

esperar3sPromise().then((dado) => console.log(dado));

fetch("https://swapi.dev/api/people/1")
  .then((resp) => resp.json())
  .then((personagem) => console.log(personagem.films));
