/* 
    A palavra chave static define um método estático para a classe.
    Métodos estáticos não são chamados na instância da classe.
    Ao invés disso, eles são chamados na própria classe.
    Geralmente, são funções utilitárias, como funções para criar ou clonar objetos.
*/

class Utils {
    static cloneObject(object: Array<{}>) {
        return JSON.parse(JSON.stringify(Object.assign(object))); // primeiro pega todos os objetos que vieram do array, depois transforma em string e depois vai parsear
    };
};

class Usuarios{
    public usuarios(){
        Utils.cloneObject([tenis1, tenis2]);
    };
};

const tenis1:{ tamanho: number, estoque: boolean} = {
    tamanho: 39,
    estoque: true
}

const tenis2:{ tamanho: number, estoque: boolean} = {
    tamanho: 41,
    estoque: true
}

const tenis3:{ tamanho: number, estoque: boolean} = {
    tamanho: 40,
    estoque: false
}

console.log(Utils.cloneObject([tenis1, tenis2, tenis3]));
console.log(Usuarios)