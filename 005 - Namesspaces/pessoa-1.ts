/* 
    Os Namesspaces são uma forma específica do TypeScript para organizar código.
    Namespaces são simplesmente objetos JavaScript nomeados no namespace global.
    Isso torna os namespaces uma construção muito simples de usar.
*/

export namespace Pessoa1 { // transforma em escopo global
    export let nome = "Joao";

    const data = 1+1

    export const calc = () => {
        return data;
    }
}

console.log(Pessoa1.nome);
console.log(Pessoa1.calc());