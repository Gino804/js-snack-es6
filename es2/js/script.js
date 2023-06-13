console.log('JS OK');

const students = [
    {
        id: 213,
        name: 'Marco della Rovere',
        grades: 78
    },
    {
        id: 110,
        name: 'Paola Cortellessa',
        grades: 96
    },
    {
        id: 250,
        name: 'Andrea Mantegna',
        grades: 48
    },
    {
        id: 145,
        name: 'Gaia Borromini ',
        grades: 74
    },
    {
        id: 196,
        name: 'Luigi Grimaldello',
        grades: 68
    },
    {
        id: 102,
        name: 'Piero della Francesca',
        grades: 50
    },
    {
        id: 120,
        name: 'Francesca da Polenta',
        grades: 84
    }
];

console.table(students);

// Creo la lista di studenti con un totale di voti superiore a 70
const betterStudents = students.filter((student) => {
    return student.grades > 70;
});

console.table(betterStudents);

// Creo la lista di studenti con un totale di voti superiore a 70 e con un id maggiore di 120
const betterStudentsWithHighId = students.filter((student) => {
    return student.grades > 70 && student.id > 120;
});

console.table(betterStudentsWithHighId);

// Creo la lista delle targhe

const plates = [];
students.forEach((student) => {
    plates.push(student.name.toUpperCase());
});

console.table(plates);