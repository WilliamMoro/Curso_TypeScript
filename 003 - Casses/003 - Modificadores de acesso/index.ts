/* 
    public -        Pode ser acessado tanto pela mesma classe, classes filhas e outras classes.
    ################################################################################################################

    protected -     Pode ser acessado pela mesma classe e classes filhas, não pode ser acessado por outras classes
    ##################################################################################################################

    privat -        Pode ser acessada somente pela própria classe
*/

class Pessoa {
    public nome: string;
    public idade: number;

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

const pessoa = new Pessoa ("William", 22);

