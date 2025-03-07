// # SNACK 8
/* 
Crea una funzione che simula un conto alla rovescia

    Scrivi una funzione contoAllaRovescia che accetta un numero n e stampa il conto alla rovescia da n a 0, con un intervallo di 1 secondo tra ogni numero. Quando arriva a 0, stampa "Tempo scaduto!" e interrompe il timer.

Esempio di utilizzo:
    contoAllaRovescia(5)

Output atteso:
    5
    4
    3
    2
    1
    Tempo scaduto!
*/

function contoAllaRovescia(num) {
  let count = num;

  const i = setInterval(() => {
    if (count === 0) {
      console.log("Tempo scaduto!");
      clearInterval(i);
    } else {
      console.log("count: ", count);
      count--;
    }
  }, 1000);
}

contoAllaRovescia(5);
