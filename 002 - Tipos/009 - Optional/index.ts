const fn = (nome: string, idade?: number) => {
    if(!idade) {
        return `nome: ${nome}. idade: Sem valor definido`
    }

    return `nome: ${nome}, idade: ${idade}`;
};

console.log(fn("William", 22));
console.log(fn("William"));

const pessoa: {nome: string, idade: number, estuda?: boolean} = {nome: 'William', idade: 22};
console.log(pessoa);