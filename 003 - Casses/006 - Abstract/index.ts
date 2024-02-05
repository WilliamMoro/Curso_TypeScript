/* 
    Classes, métodos e campos no TypeScript podem ser abstratos.

    Um método abstrato ou campo abstrato é aquele que não teve implementação fornecida

    O papel das classes abstratas é servir como uma classe base para subclasses que implementam todos os membros abstratos.

    Quando uma classe não possui menbros abstratos, ela é chamada de concreta.
*/

abstract class Pessoa {
    protected nome: string;
    protected idade: number;

    constructor(nome: string, idade:number) {
        this.nome = nome;
        this.idade = idade;
    }

    public comer(comida: string){
        return `O ${this.nome}, comeu ${comida}`
    }

    public fezAniversário(){
        return `O ${this.nome} fez ${++this.idade} anos`
    }

    protected abstract profissao: string;
    public abstract qualSuaProfissao(): string;
    public abstract qualSeuSalário(salario: number): number;
};

class William extends Pessoa {
    protected profissao: string = "Programador";

    constructor() {
        super(`William`, 22);
    }

    public qualSuaProfissao(): string {
        return `Sua Profissão é ${this.profissao}`
    }

    public qualSeuSalário(salario: number): number {
        return salario;
    }
}

class Larissa extends Pessoa {
    protected profissao: string = "Diretora";

    constructor() {
        super("Larissa", 24);
    }

    public qualSuaProfissao(): string {
        return `Sua Profissão é ${this.profissao}`
    };

    public qualSeuSalário(salario: number): number {
        return salario;
    }
}


const william = new William();
const larissa = new Larissa();