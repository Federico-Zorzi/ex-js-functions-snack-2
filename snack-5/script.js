// # SNACK 5
/* 
Crea una funzione stampaOgniSecondo con setInterval.

    Definisci una funzione che accetta un messaggio e lo stampa ogni secondo.

    Nota: Questa funzione creerà un loop infinito. Interrompilo manualmente o usa clearInterval() in un altro script.
*/

function stampaOgniSecondo(mex, ms) {
  let count = 0;
  return () => {
    setInterval(() => {
      count++;
      console.log(`${mex}: ${count}`);
    }, ms);
  };
}

const executeEvery1Second = stampaOgniSecondo("Stampa 1 secondo", 1000);
executeEvery1Second();
