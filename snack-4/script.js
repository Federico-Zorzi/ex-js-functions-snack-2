// # SNACK 4
/* 
Crea un generatore di funzioni creaTimer

    Scrivi una funzione creaTimer che accetta un tempo (in ms) e restituisce una nuova funzione che avvia un setTimeout per stampare "Tempo scaduto!".
*/

function creaTimer(ms) {
  return setTimeout(() => console.log(`Tempo scaduto: ${ms}ms`), ms);
}

console.log(creaTimer(1000));
console.log(creaTimer(3000));
console.log(creaTimer(5000));
console.log(creaTimer(7000));
console.log(creaTimer(9000));
