/* 
    Getters e setters são usados para proteger seus dados, especialmente na criação de classes.

    Para cada instância de variável, um método getter retorna seu valor, enquanto um método setter o define ou atualiza.
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

    get profissao() {
        // Função
        // Validar se contem @ / $
        if(this._profissao === "Piloto de Drone"){
            return `Ele não é mais um programador, mudou para ${this._profissao}`
        }
        return this._profissao;
    }

    set profissao(job: string){
        this._profissao = job;
    }
}

const william = new William();
console.log(william.profissao);
william.profissao = "Cozinheiro";
console.log(william.profissao);
william.profissao = "Piloto de Drone";
console.log(william.profissao);
