let array1: [string, string, number, boolean] = [
    "William Moro", 
    "Teste", 
    22, 
    true];
let array2: Array<string | number | boolean> = [
    "William",
    "Juan", 
    "Moro", 
    22,
    true,
    17991689805
];


let obj1: {nome: string, sobrenome: string, idade: number, deuBom: boolean} = {
    nome:"William", 
    sobrenome:"Moro",
    idade: 22,
    deuBom: true,
};

let obj2: Array<{nome: string, sobrenome: string, idade: number, deuBom: boolean}> = [
    {
    nome:"William", 
    sobrenome:"Moro",
    idade: 22,
    deuBom: true,
},
{
    nome:"Larissa", 
    sobrenome:"Moro",
    idade: 24,
    deuBom: false,
}
]

console.log(array1);
console.log(array2);
console.log(obj1);
console.log(obj2);