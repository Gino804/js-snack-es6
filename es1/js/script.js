console.log('JS OK');

const guests = [ 'Brad Pitt', 'Johnny Depp', 'Lady Gaga', 'Cristiano Ronaldo', 'Georgina Rodriguez', 'Chiara Ferragni', 'Fedez', 'George Clooney', 'Amal Clooney', 'Damiano Maneskin'];

// Metodo map

/* let i = 0;
const guestsObjects = guests.map((guest) => {
    guest = {
        table: 'Tavolo Vip',
        name: guests[i],
        seat: i + 1
    };
    i++;
    return guest;
}); */

// Metodo foreach

const guestsObjects = [];
guests.forEach((guest, i) => {
    guest = {
        table: 'Tavolo Vip',
        name: guests[i],
        seat: i + 1
    };
    guestsObjects.push(guest);
});

console.table (guestsObjects);