/* Uma casse TypeScript é uma estrutura de programação orientada a objeto
que possui um conjunto de propriedades e métodos

A classe é um modelo para criar objetos, permitiondo que você defina
uma estrutura com propriedades e comportamentos.
*/

enum Emes {
    JAN = "Janeiro",
    FEV = "Fevereiro",
    MAR = "Março",
    ABR = "Abril",
    MAI = "Maio",
    JUN = "Juanho",
    JUL = "Julho",
    AGO = "Agosto",
    SET = "Setembro",
    OUT = "Outubro",
    NOV = "Novembro",
    DEZ = "Dezembro",
}

class Pessoa {
    nome: string;
    idade: number;
    mesAniversário: string;

    constructor(nome: string, idade:number, mesAniversário: string) {
        this.nome = nome;
        this.idade = idade;
        this.mesAniversário = mesAniversário;
    }

    comer(comida: string){
        return `O ${this.nome}, comeu ${comida}`
    }

    fezAniversário(EMes: string){
        return `O ${this.nome} fez ${++this.idade} anos`
    }
};

    const pessoa3 = new Pessoa("William Moro", 22, Emes.NOV);
        console.log(pessoa3.comer("Dogão"));
    if(pessoa3.mesAniversário === Emes.FEV) {
        console.log(pessoa3.fezAniversário("Emes.NOV"))
    } else {
        console.log(`${pessoa3} ainda não fez aniversário`);
    }

    const pessoa2 = new Pessoa("Larissa Moro", 23, Emes.FEV);
        console.log(pessoa2.comer("Dogão"));
    if(pessoa2.mesAniversário === Emes.FEV) {
        console.log(pessoa2.fezAniversário("Emes.FEV"))
    } else {
        console.log(`${pessoa2} ainda não fez aniversário`);
    }