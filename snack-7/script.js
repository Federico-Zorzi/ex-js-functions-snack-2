// # SNACK 7
/* 
Crea una funzione che ferma un timer dopo un certo tempo

    Scrivi una funzione eseguiEferma che accetta un messaggio, un tempo di avvio e un tempo di stop. Il messaggio deve essere stampato a intervalli regolari, ma si deve fermare dopo il tempo di stop.
*/

function eseguiEferma(mex, msStart, msEnd) {
  const i = setInterval(() => console.log(`${mex}`), msStart);
  setTimeout(() => clearInterval(i), msEnd);
}

eseguiEferma(`Stampa ogni 1000ms e stop dopo 8000ms`, 1000, 8000);
eseguiEferma(`Stampa ogni 2000ms e stop dopo 10000ms`, 2000, 10000);
