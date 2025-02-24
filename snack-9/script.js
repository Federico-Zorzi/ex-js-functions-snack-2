// # SNACK 9
/* 
Creare una funzione che esegue una sequenza di operazioni con ritardi

    Scrivi una funzione sequenzaOperazioni che accetta un array di operazioni (funzioni) e un tempo di intervallo.

    Ogni operazione deve essere eseguita in sequenza con un ritardo uguale al tempo di intervallo.

Esempio di utilizzo:
    sequenzaOperazioni([
    () => console.log("Operazione 1"),
    () => console.log("Operazione 2"),
    () => console.log("Operazione 3")
  ], 2000); 

Output atteso:
    Operazione 1
    Operazione 2
    Operazione 3
*/

function sequenzaOperazioni(operationsArray, ms) {
  let index = 0;
  const i = setInterval(() => {
    operationsArray[index]();
    if (index === operationsArray.length - 1) {
      console.log("Operazioni finite ");
      clearInterval(i);
    } else {
      index++;
    }
  }, ms);
}

sequenzaOperazioni(
  [
    () => console.log("Operazione 1"),
    () => console.log("Operazione 2"),
    () => console.log("Operazione 3"),
  ],
  2000
);
