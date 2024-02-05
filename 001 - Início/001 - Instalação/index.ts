// TypeScript
// npm install -g typescript
// tsc --init

// Plugin: Code Runner
// npm i -g ts-node
// ctrl + alt + n

console.log("npm install -g typescript");

const pedido = (pedido: string) => {
    return `Deu bom o seu pedido ${pedido}`
}

console.log(pedido("454"));

const quantidade = (tenis: number, camisetas:number) => {
    return `Você comprou ${tenis} tenis e ${camisetas} camisetas`
}

console.log(quantidade(2, 3));