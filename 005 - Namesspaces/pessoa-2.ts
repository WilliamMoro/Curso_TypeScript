/* 
    Os Namesspaces são uma forma específica do TypeScript para organizar código.
    Namespaces são simplesmente objetos JavaScript nomeados no namespace global.
    Isso torna os namespaces uma construção muito simples de usar.
*/
import { Pessoa, Pessoa1 } from "./modules";

console.log(Pessoa1.nome);
console.log(Pessoa1.calc());


console.log(Pessoa.William.nome);
console.log(Pessoa.Larissa.nome);