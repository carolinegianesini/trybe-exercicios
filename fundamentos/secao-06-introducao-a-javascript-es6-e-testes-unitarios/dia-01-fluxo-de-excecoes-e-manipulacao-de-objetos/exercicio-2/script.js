// const funcionaria = {
//     nome: 'Sara',
//     idade: 40, 
//     função: 'projetista',
// };
// console.log(Object.keys(funcionaria));

// const student1 = {
//     html: 'Muito Bom',
//     css: 'Bom',
//     javascript: 'Ótimo',
//     softskills: 'Ótimo',
// };
  
// const student2 = {
//     html: 'Bom',
//     css: 'Ótimo',
//     javascript: 'Ruim',
//     softskills: 'Ótimo',
//     git: 'Bom',
// };

// function listaSkills(estudante) {
//     const arrayDeSkills = Object.keys(estudante);
//     for (const skill in arrayDeSkills) {
//         console.log(`${arrayDeSkills[skill]}, Nível: ${estudante[arrayDeSkills[skill]]}`);
//     }
// };

// listaSkills(student2);

// const funcionaria = {
//     nome: 'Silvana',
//     idade: 45, 
//     função: 'vendedora',
// }

// console.log(Object.values(funcionaria));

// const socio = {
//     nome: 'Jairo',
//     idade: 50,
//     função: 'administrador',
// }
// console.log(Object.entries(socio));

const coutries = {
    franca: 'Paris',
    brasil: 'Brasília',
    espanha: 'Madrid',
    portugal: 'Lisboa',
};

const pairKeyValue = Object.entries(coutries);

for(index in pairKeyValue) {
    console.log('--------');
    console.log('País:', pairKeyValue[index][0]);
    console.log('Capital:', pairKeyValue[index][1]);
};

