// # SNACK 4
/* 
Crea un generatore di funzioni creaTimer

    Scrivi una funzione creaTimer che accetta un tempo (in ms) e restituisce una nuova funzione che avvia un setTimeout per stampare "Tempo scaduto!".
*/

function creaTimer(ms) {
  return setTimeout(() => console.log(`Tempo scaduto: ${ms}ms`), ms);
}

creaTimer(1000);
creaTimer(3000);
creaTimer(5000);
creaTimer(7000);
creaTimer(9000);
