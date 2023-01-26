let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let impares = [];

for (let index = 0; index < numbers.length; index += 1){
    if (numbers[index] % 2 !== 0){
        impares.push(numbers[index]);
    }
}

if (impares.length >= 1){
    console.log(impares.length);
} else {
    console.log('Nenhum valor ímpar encontrado');
}



