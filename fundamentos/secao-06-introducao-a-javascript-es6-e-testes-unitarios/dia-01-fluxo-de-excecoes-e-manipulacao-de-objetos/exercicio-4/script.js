const lesson1 = {
    materia: 'Matemática',
    numeroEstudantes: 20,
    professor: 'Maria Clara',
    turno: 'manhã',
};
  
const lesson2 = {
    materia: 'História',
    numeroEstudantes: 20,
    professor: 'Carlos',
};
  
const lesson3 = {
    materia: 'Matemática',
    numeroEstudantes: 10,
    professor: 'Maria Clara',
    turno: 'noite',
};

function turno(objeto, chave, valor) {
    objeto[chave] = valor
}
turno(lesson2, 'turno', 'noite');

function listKeys(objeto) {
    console.log(Object.keys(objeto));
}
listKeys(lesson3);

function tamanhoObjeto(objeto) {
    console.log(Object.keys(objeto).length);
}
tamanhoObjeto(lesson3);

function listValues(objeto) {
    console.log(Object.values(objeto));
}
listValues(lesson3);

const allLessons = Object.assign({}, {lesson1, lesson2, lesson3});
console.log(allLessons)

function totalEstudantes(objeto) {
    let total = 0;
    const keys = Object.keys(objeto);
    for (index in keys) {
        total += objeto[keys[index]].numeroEstudantes;
    }
    return total;
}
console.log(totalEstudantes(allLessons));

function getValueByNumber(obj,number) {
    console.log(Object.values(obj)[number]);
}
getValueByNumber(lesson1, 2);

const verifyPair = (obj, key, value) => {
    const entries = Object.entries(obj);
    let isEqual = false;
    for (let index in entries) {
      if (entries[index][0] === key && entries[index][1] === value) isEqual = true;
    }
    return isEqual;
};
console.log(verifyPair(lesson2,'professor','Carlos'));

const allLesson = {
    lesson1: {
      materia: 'Matemática',
      numeroEstudantes: 20,
      professor: 'Maria Clara',
      turno: 'manhã'
    },
    lesson2: {
      materia: 'História',
      numeroEstudantes: 20,
      professor: 'Carlos',
      turno: 'noite'
    },
    lesson3: {
      materia: 'Matemática',
      numeroEstudantes: 10,
      professor: 'Maria Clara',
      turno: 'noite'
    }
}

function mathStudents(objeto) {
    let total = 0;
    const array = Object.keys(objeto);
    for (index in array) {
        if (objeto[array[index]].materia === 'Matemática'){
            total += objeto[array[index]].numeroEstudantes;
        }
    }
    return total;
}
console.log(mathStudents(allLesson));