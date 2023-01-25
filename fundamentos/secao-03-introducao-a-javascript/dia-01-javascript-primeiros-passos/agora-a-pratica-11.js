let aliquotaInss = 0;
let aliquotaIr = 0;
let salarioBruto = 8000;

if (salarioBruto <= 1556.94) {
    aliquotaInss = (8 * salarioBruto) / 100;
} else if (salarioBruto <= 2594.92) {
    aliquotaInss = (9 * salarioBruto) / 100;
} else if (salarioBruto <= 5189.82) {
    aliquotaInss = (11 * salarioBruto) / 100;
} else {
    aliquotaInss = 570.88
}

let salarioBase = salarioBruto - aliquotaInss;

if (salarioBase <= 1903.98) {
    aliquotaIr = 0;
} else if (salarioBase <= 2826.65) {
    aliquotaIr = ((7.5 * salarioBase) / 100) - 142.80;
} else if (salarioBase <= 3751.05) {
    aliquotaIr = ((15 * salarioBase) / 100) - 354.80;
} else if (salarioBase <= 4664.68) {
    aliquotaIr = ((22.5 * salarioBase) / 100) - 636.13;
} else {
    aliquotaIr = ((27.5 * salarioBase) / 100) - 869.36;
}

let salarioLiquido = salarioBase - aliquotaIr;

console.log(salarioLiquido);