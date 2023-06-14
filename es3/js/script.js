console.log('JS OK');

const bikes = [
    {
        name: 'Bottecchia',
        weight: 10
    },
    {
        name: 'Piaggio',
        weight: 10.5
    },
    {
        name: 'Cipollini',
        weight: 9.3
    },
    {
        name: 'Garelli',
        weight: 8.9
    },
    {
        name: 'Pinarello',
        weight: 9.5
    }
];

// Recupero l'elemento dal DOM
const list = document.getElementById('list');
console.log(list);

// Creo una "bici più leggera" con un peso che sarebbe impossibile per una bici
let lightestBike = {weight: 100};

// Per ogni elemento nella lista delle bici, se il peso della bici corrente è minore di quello della bici più leggera, la bici più leggera diventa la bici corrente
bikes.forEach(bike => {if(bike.weight < lightestBike.weight) lightestBike = bike;});

// Stampo in pagina la bici con peso minore utilizzando il destructuring

const {name, weight} = lightestBike;

list.innerHTML = `<li>Nome: ${name}</li> <li>Peso: ${weight}kg</li>`;