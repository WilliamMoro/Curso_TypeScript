enum EMes {
    JAN = "Janeiro",
    FEV = "Fevereiro",
    MAR = "Março",
    ABR = "Abril",
}

console.log(EMes);
console.log(EMes.MAR);

console.log("----------------------")

// PODE SER CRIADO MAPAS DE VALOR QUE SÃO REPETIDOS DENTRO DO CÓDIGO E EVITAR PROBLEMAS COMO IF (MES.JAN);

const pessoa: {nome: string, mesAniversario: string} = {
    nome:"William",
    mesAniversario: EMes.MAR
};

if (pessoa.mesAniversario === EMes.MAR) {
    console.log(pessoa);
} else {
    console.log("Ainda não chegou seu aniversário");
}