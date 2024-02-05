/*
    As interafces TypeScript definem os contratos em seu código.
    Eels também fornecem nomes explícitos para verificações de tipos.
*/

interface IPessoa {
    nome: string,
    idade: number,
    readonly cpf: number,
    enabled(): boolean;
}

const pessoa: IPessoa = { 
    nome: "William", 
    idade: 22, 
    cpf: 39344312390, 
    enabled: () => {
    return true
}};

class Joao implements IPessoa {
    nome: string = "Raphael";
    idade: number = 12;

    readonly cpf: number = 4327439812;

    enabled(): boolean {
        return false;
    };
};