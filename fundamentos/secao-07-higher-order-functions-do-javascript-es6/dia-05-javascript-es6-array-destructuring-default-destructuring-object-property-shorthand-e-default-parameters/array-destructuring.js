const comidasFavoritas = ['açaí', 'sorvete', 'batata-frita', 'sushi', 'pizza', 'hamburguer'];
const[comida1, comida2, comida3, comida4, comida5, comida6] = comidasFavoritas;

console.log(comida4);

// __________________________________________________________________

const primeNumbers = [17, 23, 37]

const sum = (a, b) => {
  console.log(a + b);
}

sum(primeNumbers[0], primeNumbers[2]) // 54

// Produza o mesmo resultado acima, porém utilizando array destructuring

const primeNumbers2 = [17, 23, 37]

const soma = (a, b) => {
  console.log(a + b);
}

const [num1, num2, num3] = primeNumbers2;
soma(num1, num3);

// __________________________________________________________________

let comida = 'gato';
let animal = 'água';
let bebida = 'arroz';

console.log(comida, animal, bebida); // arroz gato água

// Utilizando array destructuring, faça com que os valores apareçam nas variáveis correspondentes ao seu verdadeiro tipo

[comida, animal, bebida] = [bebida, comida, animal];

console.log(comida, animal, bebida);

// __________________________________________________________________

let numerosPares = [1, 3, 5, 6, 8, 10, 12];

// console.log(numerosPares); // [6, 8, 10, 12];

// Utilize array destructuring para produzir o resultado esperado pelo console.log acima

[,,, ...numerosPares] = numerosPares;

console.log(numerosPares);

// __________________________________________________________________