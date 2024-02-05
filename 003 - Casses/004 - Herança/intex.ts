/* 
    public -        Pode ser acessado tanto pela mesma classe, classes filhas e outras classes.
    ################################################################################################################

    protected -     Pode ser acessado pela mesma classe e classes filhas, não pode ser acessado por outras classes
    ##################################################################################################################

    privat -        Pode ser acessada somente pela própria classe
*/

class Pessoa {
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
};

class William extends Pessoa {
    private _profissao: string = "Programador";

    constructor() {
        super(`William`, 22);
    };

    public getProfissão() {
        return `${this.nome} trabalha como ${this._profissao}`
    }
}

const william = new William();
console.log(william.getProfissão());
console.log(william.comer("Macarrão"));
console.log(william.fezAniversário());
