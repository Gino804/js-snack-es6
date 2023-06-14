console.log('JS OK');

const teams = [
    {
        name: 'Sassuolo',
        points: 0,
        fouls: 0
    },
    {
        name: 'Frosinone',
        points: 0,
        fouls: 0
    },
    {
        name: 'Real Madrid',
        points: 0,
        fouls: 0
    },
    {
        name: 'Lecce',
        points: 0,
        fouls: 0
    },
    {
        name: 'Empoli',
        points: 0,
        fouls: 0
    }
];

// Funzione che restituisce un numero randomico
const randomNumber = (min, max) => {
    return Math.floor(Math.random() * (max + 1 - min)) + min;
}

// Recupero l'elemento dal DOM
const list = document.getElementById('list');
console.log(list);

// Genero numeri random per i punti e i falli subiti di ogni squadra
teams.forEach(team => {
    team.points = randomNumber(0, 99);
    team.fouls = randomNumber(0, 99);
})
console.table(teams)

// Creo un array che contiene solo i nomi e i falli subiti di ogni squadra usando il destructuring
const teamsFouls = teams.map((team) => {
    const {name, fouls} = team;
    return {name, fouls};
})

// Stampo in pagina il risultato
teamsFouls.forEach(team => {
    list.innerHTML += `<li>${team.name}<br>Falli subiti: ${team.fouls}</li><br>`;
})