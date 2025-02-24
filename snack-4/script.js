// # SNACK 4
/* 
Crea un generatore di funzioni creaTimer

    Scrivi una funzione creaTimer che accetta un tempo (in ms) e restituisce una nuova funzione che avvia un setTimeout per stampare "Tempo scaduto!".
*/

function creaTimer(ms) {
  return () => {
    setTimeout(() => console.log(`Tempo scaduto: ${ms}ms`), ms);
  };
}

const create1SecondTimer = creaTimer(1000);
create1SecondTimer();
const create3SecondTimer = creaTimer(3000);
create3SecondTimer();
