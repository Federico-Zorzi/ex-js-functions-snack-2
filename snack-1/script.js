// # SNACK 1
/* 
Crea una funzione che somma due numeri.

    Crea una funzione dichiarativa chiamata somma che accetta due numeri e restituisce la loro somma.
    Poi, definisci la stessa funzione somma ma come funzione anonima assegnata a una variabile
    Quindi, riscrivi la funzione somma con la sintassi delle arrow functions.
*/
const numero1 = 4;
const numero2 = 5;

function somma(num1, num2) {
  return num1 + num2;
}

const anonimusSomma = (num1, num2) => num1 + num2;

console.log(`${numero1} + ${numero2} = ${somma(numero1, numero2)}`);
console.log(`${numero1} + ${numero2} = ${anonimusSomma(numero1, numero2)}`);
