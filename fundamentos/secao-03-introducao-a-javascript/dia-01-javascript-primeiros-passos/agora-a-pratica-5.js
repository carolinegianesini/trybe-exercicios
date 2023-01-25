const ang1 = 60;
const ang2 = 80;
const ang3 = 40;

let somaAngulos = ang1 + ang2 + ang3;

let todosAngulosPositivos = ang1 > 0 && ang3 > 0 && ang2 > 0;

if (todosAngulosPositivos) {
    if (somaAngulos === 180) {
        console.log(true)
    } else {
        console.log(false)
    }
} else {
    console.log('Erro: ângulo inválido')
}
