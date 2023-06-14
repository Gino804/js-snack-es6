# SNACK 4

## Traccia:

Creare un array di oggetti di squadre di calcio.

Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.

Generare numeri random al posto degli 0 nelle proprietà punti fatti e falli subiti.

Infine, usando il destructuring, creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.

## Steps:

- Creo la lista delle squadre
- Creo una funzione che restituisce un numero randomico
- Recupero l'elemento dal DOM
- **PER OGNI** elemento della lista delle squadre
  - Assegno due numeri randomici ai punti e ai falli subiti della squadra corrente
- Creo una lista i cui elementi contengono solo i nomi e i falli subiti di ogni squadra
- **PER OGNI** elemento della lista delle squadre con solo i nomi e i falli subiti
  - Stampo in pagina il nome e i falli subiti della squadra corrente
