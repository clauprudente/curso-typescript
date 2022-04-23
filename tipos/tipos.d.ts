declare let nome: string;
declare let idade: Number;
declare let possuiMobiles: Boolean;
declare let hobbies: string[];
declare let endereco: [string, number];
declare enum Cor {
    Cinza = 0,
    Verde = 1,
    Azul = 2,
    Laranja = 3,
    Amarelo = 4,
    Vermelho = 5
}
declare let minhaCor: Cor;
declare let carro: any;
declare function retornaMeuNome(): string;
declare function digaOi(): void;
declare function multiplicar(numA: number, numB: number): number;
declare let calculo: (x: number, y: number) => number;
declare let oi: () => void;
declare let usuario: {
    nome: string;
    idade: number;
};
declare let funcionario: {
    supervisores: string[];
    baterPonto: (horas: number) => String;
};
declare type Funcionario = {
    supervisores: string[];
    baterPonto: (horas: number) => String;
};
declare let funcionario2: Funcionario;
declare let nota: number | string;
declare let valor: number;
declare function falha(msg: string): never;
declare const produto: {
    nome: string;
    preco: number;
    validarProduto(): void;
};
declare let alturaOpcional: null | number;
declare type Contato = {
    nome: string;
    tel1: string;
    tel2: string | null;
};
declare const contato1: Contato;
declare type ContaBancaria = {
    saldo: number;
    depositar: (valor: number) => void;
};
declare let contaBancaria: ContaBancaria;
declare type Correntista = {
    nome: string;
    contaBancaria: ContaBancaria;
    contatos: string[];
};
declare let correntista: Correntista;
//# sourceMappingURL=tipos.d.ts.map