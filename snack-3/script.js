// # SNACK 3
/* 
Crea una funzione eseguiOperazione

    Definisci una funzione eseguiOperazione che accetta tre parametri: due numeri e una funzione operatore (callback). La funzione deve eseguire l'operazione fornita sui due numeri.

    Esempio d’uso:
        const somma = (a, b) => a + b;
        const moltiplica = (a, b) => a * b;

        const eseguiOperazione = (a, b, operazione) => operazione(a, b);

        console.log(eseguiOperazione(3, 4, somma)); // 7
        console.log(eseguiOperazione(3, 4, moltiplica)); // 12
*/

const numero1 = 15;
const numero2 = 3;

function eseguiOperazione(num1, num2, mathOperation) {
  return mathOperation(num1, num2);
}

const addizione = (n1, n2) => n1 + n2;
const sottrazione = (n1, n2) => n1 - n2;
const moltiplicazione = (n1, n2) => n1 * n2;
const divisione = (n1, n2) => n1 / n2;

console.log(
  `${numero1} + ${numero2} = ${eseguiOperazione(numero1, numero2, addizione)}`
);
console.log(
  `${numero1} - ${numero2} = ${eseguiOperazione(numero1, numero2, sottrazione)}`
);
console.log(
  `${numero1} * ${numero2} = ${eseguiOperazione(
    numero1,
    numero2,
    moltiplicazione
  )}`
);
console.log(
  `${numero1} / ${numero2} = ${eseguiOperazione(numero1, numero2, divisione)}`
);
