const funcionaria = {
    nome: 'Sara',
    idade: 40, 
    função: 'projetista',
};
console.log(Object.keys(funcionaria));

const student1 = {
    html: 'Muito Bom',
    css: 'Bom',
    javascript: 'Ótimo',
    softskills: 'Ótimo',
};
  
const student2 = {
    html: 'Bom',
    css: 'Ótimo',
    javascript: 'Ruim',
    softskills: 'Ótimo',
    git: 'Bom',
};

function listaSkills(estudante) {
    const arrayDeSkills = Object.keys(estudante);
    for (const skill in arrayDeSkills) {
        console.log(`${arrayDeSkills[skill]}, Nível: ${estudante[arrayDeSkills[skill]]}`);
    }
};

listaSkills(student2);