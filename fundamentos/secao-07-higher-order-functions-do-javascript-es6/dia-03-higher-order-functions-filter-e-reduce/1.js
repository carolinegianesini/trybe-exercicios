const numbers = [18, 19, 23, 53, 4, 5, 76, 23, 54];

const numberPar = (number) => number % 2 === 0;
const soma = (acc, number) => acc + number;

const somanumbers = (array) => array.filter(numberPar).reduce(soma);

console.log(somanumbers(numbers));

_________________________________________

const valorItens = [1, 32, 44, 2, 3];

valorItens.reduce((acc, curr) => {
    console.log(`acc:`, acc);
    console.log(`curr:`, curr);
    console.log('a soma atual é', acc + curr);
  
    return acc + curr;
}, 0);

_________________________________________

const numbers = [1, 32, 44, 2, 3];

const sumNumbers =  (acc, curr) => acc + curr;

const totalSum = numbers.reduce(sumNumbers, 30);

console.log(totalSum); //112

_________________________________________

const numbers = [50, 85, -30, 3, 15];

const oMaior = ((bigger, number) => {return bigger > number ? bigger : number});
const biggest = numbers.reduce(oMaior);

console.log(biggest);
_________________________________________

// usando filter e reduce
const numbers = [18, 19, 23, 53, 4, 5, 76, 23, 54];

const pares = numbers.filter((numero) => numero % 2 === 0);
const somaPares = pares.reduce((acum, atual) => acum + atual, 0);

console.log(somaPares);
_________________________________________

// usando somente reduce
const numbers = [18, 19, 23, 53, 4, 5, 76, 23, 54];

const somaPares = (acum, atual) => ((atual % 2 === 0) ? acum + atual : acum);

const sumNumbers = (array) => array.reduce(somaPares,0);

console.log(sumNumbers(numbers));

_________________________________________

// usando map e reduce (lembrando que map faz o mesmo que o forEach)
const estudantes = [
    {
      nome: 'Jorge',
      sobrenome: 'Silva',
      idade: 14,
      turno: 'Manhã',
      materias: [
        { name: 'Matemática', nota: 67 },
        { name: 'Português', nota: 79 },
        { name: 'Química', nota: 70 },
        { name: 'Biologia', nota: 65 },
      ],
    },
    {
      nome: 'Mario',
      sobrenome: 'Ferreira',
      idade: 15,
      turno: 'Tarde',
      materias: [
        { name: 'Matemática', nota: 59 },
        { name: 'Português', nota: 80 },
        { name: 'Química', nota: 78 },
        { name: 'Biologia', nota: 92 },
      ],
    },
    {
      nome: 'Jorge',
      sobrenome: 'Santos',
      idade: 15,
      turno: 'Manhã',
      materias: [
        { name: 'Matemática', nota: 76 },
        { name: 'Português', nota: 90 },
        { name: 'Química', nota: 70 },
        { name: 'Biologia', nota: 80 },
      ],
    },
    {
      nome: 'Maria',
      sobrenome: 'Silveira',
      idade: 14,
      turno: 'Manhã',
      materias: [
        { name: 'Matemática', nota: 91 },
        { name: 'Português', nota: 85 },
        { name: 'Química', nota: 92 },
        { name: 'Biologia', nota: 90 },
      ],
    },
    {
      nome: 'Natalia',
      sobrenome: 'Castro',
      idade: 14,
      turno: 'Manhã',
      materias: [
        { name: 'Matemática', nota: 70 },
        { name: 'Português', nota: 70 },
        { name: 'Química', nota: 60 },
        { name: 'Biologia', nota: 50 },
      ],
    },
    {
      nome: 'Wilson',
      sobrenome: 'Martins',
      idade: 14,
      turno: 'Manhã',
      materias: [
        { name: 'Matemática', nota: 80 },
        { name: 'Português', nota: 82 },
        { name: 'Química', nota: 79 },
        { name: 'Biologia', nota: 75 },
      ],
    },
];

const melhorMateria = (acu, materia) => (acu.nota > materia.nota) ? acu : materia ; 

const reportaMelhor = (alunos) => alunos.map((aluno) => ({
    name: aluno.nome, 
    materia: aluno.materias.reduce(melhorMateria).name,
}));

console.log(reportaMelhor(estudantes));

_________________________________________


