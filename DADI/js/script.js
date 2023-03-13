// Gioco dei dadi :dado_da_gioco:

// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
// Stabilire il vincitore, in base a chi fa il punteggio più alto.
// Prima di partire a scrivere codice poniamoci qualche domanda:
// Che ci sia un array da qualche parte?

// Se dobbiamo confrontare qualcosa che "cosa" ci serve?
// Consigli del giorno:

// 1. scriviamo sempre prima dei commenti in italiano per capire cosa vogliamo fare
// 2. javascript non fa nulla da solo, dobbiamo dirgli noi cosa vogliamo fare
// 3. si ma noi cosa vogliamo fare?
// 4. torniamo a scrivere in italiano
// 5. proviamo ad immaginare le operazioni che vogliamo far svolgere al nostro programma così come lo faremmo "a mano"



let pcNumber = Math.floor(Math.random()* 5) +1;
let userNumber = Math.floor(Math.random()*5) +1;
console.log(pcNumber, userNumber, typeof userNumber, typeof pcNumber);

if (pcNumber > userNumber) {
    console.log("il pc ha un numero maggiore del giocatore",pcNumber, userNumber );
}else if (pcNumber < userNumber) {
    console.log("il giocatore ha un numero maggiore del pc", userNumber, pcNumber);
} else {
    console.log("i due numeri sono uguali",userNumber, pcNumber) ;
}
