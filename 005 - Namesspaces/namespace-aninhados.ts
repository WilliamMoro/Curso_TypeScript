/* 
    Os Namesspaces são uma forma específica do TypeScript para organizar código.
    Namespaces são simplesmente objetos JavaScript nomeados no namespace global.
    Isso torna os namespaces uma construção muito simples de usar.
*/

export namespace Pessoa {
    export namespace William {
        const data = 1+1
        
        export let nome = "William";
        export const calc = () => {
            return data;
        };
    }

    export namespace Larissa {
        const data = 1+1
        
        export let nome = "Larissa";
        export const calc = () => {
            return data;
        };
    }
}