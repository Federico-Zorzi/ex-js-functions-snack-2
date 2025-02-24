// # SNACK 6
/* 
Crea un contatore automatico con setInterval

    Definisci una funzione creaContatoreAutomatico che accetta un intervallo di tempo e restituisce una funzione che avvia un setInterval, incrementando un contatore e stampandolo.
*/

function creaContatoreAutomatico(ms) {
  let count = 0;
  return () => {
    setInterval(() => {
      count++;
      console.log(`Incrementa ogni ${ms}ms: ${count}`);
    }, ms);
  };
}

const countEvery1Second = creaContatoreAutomatico(1000);
const countEvery3Second = creaContatoreAutomatico(3000);

countEvery1Second();
countEvery3Second();
